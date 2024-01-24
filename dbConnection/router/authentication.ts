import express from "express";
import {login, register, googleLogin} from "../controllers/authentication";

export default (router: express.Router) => {
    router.post('/auth/google', googleLogin);
    router.post('/auth/register', register);
    router.post('/auth/login', login);
}

