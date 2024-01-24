import { authentication, generateRandomString } from "dbConnection/helpers";
import { createExternalUser, getExternalUserByEmail, getExternalUserbyId } from "dbConnection/models/externalUsers";
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

export const externalUserManager = async(
  userId: string, email: string, name: string, accessToken:string,refreshToken:string 
  )=>{

  let user: any = await getExternalUserbyId(userId).select('+authentication.salt +authentication.provideToken');
  
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
  const tokenPayload: string= authentication(salt, user._id.toString());
  user.authentication.sessionToken = sign(tokenPayload, process.env.API_DECODER!, { algorithm: 'HS256' });
  await user.save(); 
  //LOG IN END
  return user;
}