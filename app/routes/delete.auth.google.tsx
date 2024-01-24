// import {  json } from "@remix-run/node";
// import { verifySessionToken } from "dbConnection/helpers";
// import { ExternalUser, createExternalUser } from "dbConnection/models/externalUsers";
// import {OAuth2Client} from 'google-auth-library';
// import { externalUserManager } from "~/services/auth.server";
// import express from 'express';

// export async function action(
//   request: express.Request, response: express.Response
// ) {

//   if (request.method === 'POST') {
//     try {

//         const { accesToken, refreshToken, tokenId } = request.body;
//         const verifySignature = verifySessionToken(tokenId);
//         if(!verifySignature){
//             return json({ status: 'error', message: 'Failed to verify token' }, { status: 500 });
//         }
 
//         let email :string |undefined= undefined;
//         let userId :string |undefined= undefined;
//         let userName :string |undefined= undefined;
//         //VERIFY GOOGLE VALIDATION TOKEN
//         const client = new OAuth2Client();
//         async function verify() {
//             const ticket = await client.verifyIdToken({
//                 idToken: tokenId,
//                 audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//             });
//             const payload = ticket.getPayload();
//             email = payload?.email;
//             userName= payload?.name;
//             userId = payload?.sub;
//         }

//         await verify().catch(console.error);
//         if(!userId){
//           return json({ status: 'error', message: 'Failed to verify Google token ID' }, { status: 500 });
//         }

//         const isAccesTokenValid = verifySessionToken(accesToken);
//         if (!isAccesTokenValid) {
//             return json({ status: 'error', message: 'Failed to verify Google Acces token' }, { status: 500 });
//         }    
//         const isRefreshTokenValid = verifySessionToken(refreshToken);
//         if (!isRefreshTokenValid) {
//             return json({ status: 'error', message: 'Failed to verify Google Refresh token' }, { status: 500 });
//         }        

//         const loggedUser = externalUserManager(userId, email!, userName!, accesToken, refreshToken );
//         // const ipAddress = request.ip || request.connection.remoteAddress;
//         return response.status(200).json({user:loggedUser, ipAddress: ipAddress}).end();
//     } catch (error) {
//       console.error('Error creating user:', error);
//       return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
//     }
//   }
// };