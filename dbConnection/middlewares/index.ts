import express from 'express';
import pkg from 'lodash';

import { getUserBySessionToken } from '../models/users';
import {verifySessionToken} from '../helpers/index';
import { ErrorManager } from '~/utils/ErrorManager';
import { getExternalUserBySessionToken } from 'dbConnection/models/externalUsers';

const { get, merge } = pkg;
export const isOwner = async (req:express.Request, res:express.Response, next: express.NextFunction) => {
    try{
        const {id} = req.params;
        const currentUserId = get(req, 'identity._id') as unknown as string;

        if(!currentUserId){
            // res.sendStatus(403);
            return res.status(403).json(ErrorManager(403));
        }

        if(currentUserId.toString() !== id){
            return res.status(403).json(ErrorManager(403));
        }

        next();

    }catch(error){
        console.log(error);
        return res.status(500).json(ErrorManager(500));
    }
}

export const isAuthenticated = async (req:express.Request, res:express.Response, next: express.NextFunction) => {
    try{

        // Check if it exist
        const sessionToken = req.cookies[process.env.NIMBUS_AUTH!];

        if(!sessionToken){
            return res.status(401).json(ErrorManager(401));
        }

        // Check if it has expired
        const isTokenValid = verifySessionToken(sessionToken);
        if (!isTokenValid) {
            return res.status(403).json(ErrorManager(403));
        }

        const extingUser = await getUserBySessionToken(sessionToken);
        const extingExternalUser = await getExternalUserBySessionToken(sessionToken);
        if(!extingUser && !extingExternalUser){
            return res.status(403).json(ErrorManager(403));
        }

        merge(req, {identity:extingUser});

        return next();

    }catch(error){
        console.log(error);
        return res.status(500).json(ErrorManager(500));
    }
}