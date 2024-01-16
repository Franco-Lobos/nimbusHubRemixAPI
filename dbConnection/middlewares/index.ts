import express from 'express';
import pkg from 'lodash';

import { getUserBySessionToken } from '../models/users';
import {verifySessionToken} from '../helpers/index';

const { get, merge } = pkg;
export const isOwner = async (req:express.Request, res:express.Response, next: express.NextFunction) => {
    try{
        const {id} = req.params;
        const currentUserId = get(req, 'identity._id') as unknown as string;

        if(!currentUserId){
            res.sendStatus(403);
        }

        if(currentUserId.toString() !== id){
            res.sendStatus(403);
        }

        next();

    }catch(error){
        console.log(error);
        res.sendStatus(400);
    }
}

export const isAuthenticated = async (req:express.Request, res:express.Response, next: express.NextFunction) => {
    try{

        // Check if it exist
        const sessionToken = req.cookies['NIMBUS-AUTH'];
        console.log(req.cookies);
        if(!sessionToken){
            return res.status(401).json({ message: 'Unauthorized - Missing session token' });
        }

        // Check if it has expired
        const isTokenValid = verifySessionToken(sessionToken);
        if (!isTokenValid) {
            return res.status(401).json({ message: 'Unauthorized - Expired session token' });
        }

        const extingUser = await getUserBySessionToken (sessionToken);
        if(!extingUser){
            return res.sendStatus(403);
        }

        merge(req, {identity:extingUser});

        return next();

    }catch(error){
        console.log(error);
        res.status(400);
    }
}