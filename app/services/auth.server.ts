// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { externalUserSessionStorage } from "~/services/session.server";
import { SessionData } from "@remix-run/node";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { ExternalUser, ExternalUserModule, createExternalUser, getExternalUserByEmail } from "dbConnection/models/externalUsers";
import { authentication, generateRandomString } from "dbConnection/helpers";
import { sign } from "jsonwebtoken";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator  = new Authenticator<ExternalUser>(externalUserSessionStorage);

authenticator.use(
    new OAuth2Strategy(
      {
        authorizationURL: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenURL: "https://oauth2.googleapis.com/token",
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.TOKEN_SECRET!,
        callbackURL: process.env.REDIRECT_URL!,
        scope: "openid email profile", // optional
        useBasicAuthenticationHeader: false // defaults to false
      },
      async ({
        accessToken, refreshToken, extraParams, profile, context, request,
      }) => {
        
        // here you can use the params above to get the user and return it
        const {email, name} = profile as any;
        let user: any = await getExternalUserByEmail(email).select('+authentication.salt +authentication.provideToken');
        if(!user){
            const salt = generateRandomString();
            user  = await createExternalUser({
                email,
                name,
                authentication:{
                    accessToken,
                    refreshToken,
                    salt,
                }
            });
        }else{
            user.authentication.accessToken = accessToken;
            user.authentication.refreshToken = refreshToken;
        }

        //LOG IN
        const salt = generateRandomString();
        const tokenPayload = authentication(salt, user._id.toString());
        user.authentication.sessionToken = sign(tokenPayload, process.env.API_DECODER!, { algorithm: 'HS256' });
        await user.save(); 
        //LOG IN END
        
        return user;
      }
    ),
    // this is optional, but if you setup more than one OAuth2 instance you will
    // need to set a custom name to each one
    "Google"
  );