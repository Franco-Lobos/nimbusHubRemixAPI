import { ActionFunctionArgs, json } from "@remix-run/node";
import { verifySessionToken } from "dbConnection/helpers";
import { ExternalUser, createExternalUser } from "dbConnection/models/externalUsers";
import {OAuth2Client} from 'google-auth-library';
import { externalUserManager } from "~/services/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {

        const { user, tokenId } = await request.json();
        const verifySignature = verifySessionToken(tokenId);
        if(!verifySignature){
            return json({ status: 'error', message: 'Failed to verify token' }, { status: 500 });
        }

        //VERIFY GOOGLE VALIDATION TOKEN
        const client = new OAuth2Client();
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: tokenId,
              audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
          });
          const payload = ticket.getPayload();
          return payload['sub'];
        }

        const userId = await verify().catch(console.error);
        if(!userId){
          return json({ status: 'error', message: 'Failed to verify google token' }, { status: 500 });
        }
        const parsedUser = user as ExternalUser;
        const loggedUser = externalUserManager(userId, parsedUser.email, parsedUser.name, parsedUser.authentication.accessToken, parsedUser.authentication.refreshToken );
  
    //   const newUser = await createUser(data);
      return json({ status: 'success', data: "HI FROM GOOGLE AUTH" });     
    } catch (error) {
      console.error('Error creating user:', error);
      return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
    }
  }
};