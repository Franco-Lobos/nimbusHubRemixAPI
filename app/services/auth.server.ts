import { authentication, generateRandomString } from "dbConnection/helpers";
import { createExternalUser, getExternalUserByEmail, getExternalUserbyId } from "dbConnection/models/externalUsers";
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const externalUserManager = async(
  userId: string, email: string, name: string, accessToken:string,refreshToken:string , signedOAuth2Token:string
  )=>{
    const salt = generateRandomString();
    let user: any = await getExternalUserByEmail(email).select('+authentication.salt +authentication.provideToken');

  if(!user){
      user  = await createExternalUser({
          email,
          name,
          authentication:{
              accessToken,
              refreshToken,
              salt,
              sessionToken: signedOAuth2Token, //temporal
          }
      });
      user=  await getExternalUserByEmail(email).select('+authentication.salt +authentication.provideToken');
  }else{
      user.authentication.accessToken = accessToken;
      user.authentication.refreshToken = refreshToken;
      user.authentication.sessionToken = signedOAuth2Token;//temporal
  }

  //LOG IN
  // const tokenPayload: string= authentication(salt, user._id.toString());
  // user.authentication.sessionToken = sign(tokenPayload, process.env.API_DECODER!, { algorithm: 'HS256' });
  await user.save(); 
  //LOG IN END
  return user;
}