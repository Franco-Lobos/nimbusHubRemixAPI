import express, { json } from 'express';
import { getUserByEmail , createUser} from '../models/users';
import { generateRandomString, authentication, verifySessionToken } from '../helpers';
import { ErrorManager } from '~/utils/ErrorManager';
import {OAuth2Client} from 'google-auth-library';

import jwt from 'jsonwebtoken';
import { externalUserManager } from '~/services/auth.server';
import { ExternalUser, createExternalUser } from 'dbConnection/models/externalUsers';

const { sign } = jwt;
export const login = async(req: express.Request, res: express.Response)=>{
    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({status: 400, error: 'User or Password are null' });
        }
        const user: any = await getUserByEmail(email).select('+authentication.salt +authentication.password');

        if(!user){
            return res.status(400).json({status: 400, error: 'User not found.' });
        }

        const expectedHash =  authentication(user.authentication.salt, password);

        if(expectedHash !== user.authentication.password){
            return res.status(403).json({status: 403, error: 'Incorrect password.' }); // TODO RETURN WRONG PASSWORD
        }

        const salt = generateRandomString();
        const tokenPayload = authentication(salt, user._id.toString());
        user.authentication.sessionToken = sign(tokenPayload, process.env.API_DECODER!, { algorithm: 'HS256' });

        await user.save(); 

        res.cookie(process.env.NIMBUS_AUTH!, user.authentication.sessionToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000, // twelveHoursInMilliseconds  12 * 60 * 60 * 1000,
            secure: true, 
        });
        const ipAddress = req.ip || req.connection.remoteAddress;


        return res.status(200).json({user, ipAddress: ipAddress}).end();

    } catch(error){
        console.log(error);
        return res.status(500).json(ErrorManager(500));
    }
}

export const register  = async(req: express.Request, res: express.Response)=>{
    try{
        const {email, password, username} = req.body;  

        if(!email || !password || !username){
            return res.status(400).json({status: 400, error: 'User or Password are null' });
        }
        const user: any = await getUserByEmail(email);

        if(user){
            return res.status(400).json({status: 400, error: 'User already exist' });
        }

        const salt = generateRandomString();

        const newUser = await createUser({
            email,
            username,
            authentication:{
                salt,
                password: authentication(salt, password),
            }
        });

        return res.status(200).json(newUser).end();

    }catch(error){
        console.log("SERVER AUTHENTICATION ERROR:",error);
        return res.status(500).json(ErrorManager(500));
    }
}

export async function googleLogin(
    request: express.Request, response: express.Response
  ) {
    if (request.method === 'POST') {
      try {
  
            const { accesToken, refreshToken, tokenId } = request.body;
            let email :string |undefined= undefined;
            let userId :string |undefined= undefined;
            let userName :string |undefined= undefined;
            //VERIFY GOOGLE VALIDATION TOKEN
            const client = new OAuth2Client();
            async function verify() {
                const ticket = await client.verifyIdToken({
                    idToken: tokenId,
                    audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                });
                const payload = ticket.getPayload();
                email = payload?.email;
                userName= payload?.name;
                userId = payload?.sub;
            }
    
            await verify().catch(console.error);

            if(!userId){
                return response.status(500).json({ status: 'error', message: 'Failed to verify Google token ID' });
            }
  
            const isAccesTokenValid = verifySessionToken(accesToken);
            if (!isAccesTokenValid) {
                return response.status(500).json({ status: 'error', message: 'Failed to verify Google Acces token' });
            }    

            const loggedUser = await externalUserManager(userId, email!, userName!, accesToken, refreshToken );
            
            response.cookie(process.env.NIMBUS_AUTH!, loggedUser.authentication.sessionToken, {
                httpOnly: true,
                maxAge: 60 * 60 * 1000, // twelveHoursInMilliseconds  12 * 60 * 60 * 1000,
                secure: true, 
            });
            const ipAddress = request.ip || request.connection.remoteAddress;
            return response.status(200).json({user:loggedUser, ipAddress: ipAddress}).end();

      } catch (error) {
        console.error('Error creating user:', error);
        return response.status(500).json({ status: 'error', message: 'Failed to create user' });
      }
    }
  };