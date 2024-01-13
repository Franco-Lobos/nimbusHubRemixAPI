import express from 'express';

export function manageNotFound (req: express.Request, res: express.Response){
        // Invalid request
    res.json({
    error: {
        'name':'Error',
        'status':404,
        'message':'Invalid Request',
        'statusCode':404,
        'stack':'http://localhost:8081/'
    },
        message: 'Testing!'
    });
};