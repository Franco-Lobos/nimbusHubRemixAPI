import express from "express";
import {login, register, googleLogin, googleAuthenticate} from "../controllers/authentication";

export default (router: express.Router) => {
    
    router.post('/auth/google/authenticate', googleAuthenticate);
    router.post('/auth/google/login', googleLogin);
    router.post('/auth/register', register);
    router.post('/auth/login', login);
}

