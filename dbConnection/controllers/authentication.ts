import express from 'express';
import { getUserByEmail , createUser} from '../models/users';
import { generateRandomString, authentication } from '../helpers';

import jwt from 'jsonwebtoken';
import { ErrorManager } from '~/utils/ErrorManager';
const { sign, verify } = jwt;
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