import express from 'express';
import { deleteExternalUserById, getExternalUserbyId, getExternalusers } from '../models/externalUsers';

export const getAllExternalUsers = async (req:express.Request, res:express.Response) => {
    try{
        const users = await getExternalusers();
        return res.status(200).json(users);
    }catch(error){
        console.log(error);
        return res.status(400);
    }
}

export const deleteExternalUser = async(req:express.Request, res:express.Response) => {
    try{
        const {id} = req.params;
        const deletedUser = await deleteExternalUserById(id);
        return res.json(deletedUser);
        
    }catch(error){
        console.log(error);
        return res.status(400);
    }
}


export const updateExternalUser = async (req:express.Request, res:express.Response) => {
    try{
        const {id} = req.params;
        const {username} = req.body;

        if(!username){
            return res.status(400);
        }
        const user = await getExternalUserbyId(id);
        user.username = username;
        await user.save();
        return res.status(200).json(user).end();

    }catch(error){
        console.log(error);
        return res.status(400);
    }
}