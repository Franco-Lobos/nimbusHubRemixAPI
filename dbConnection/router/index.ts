import express from 'express';
import authentication from './authentication';
import users from './users';
import weather from './weather';

const Router = express.Router();

export default (): express.Router => {
    authentication(Router);
    users(Router);
    weather(Router);
    
    return Router;
}