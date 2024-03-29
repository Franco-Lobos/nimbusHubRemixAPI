import { createRequestHandler } from "@remix-run/express";
import {  broadcastDevReady } from "@remix-run/node";
import express from 'express';
import { ServerBuild } from '@remix-run/node'


import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './dbConnection/router/index.js';
import http from 'http';

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";
import { config as dotenvConfig } from 'dotenv';
import { manageNotFound } from "dbConnection/middlewares/manageNotFound.js";


dotenvConfig();

const app = express();
const serverBuild = build as unknown as ServerBuild;
const mogoUrl :string = process.env.MONGO_URL!;
const expressPort = 8080;


app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(compression());
app.use(cookieParser()); 
app.use(express.static("public"));
app.use(bodyParser.json());  //!!IMPORTANT -> DO NOT USE BODYPARSER WITH REMIX IF IS A MIDDLEWARE API, IT WIL CRASH THE JSON 


//Db connection
mongoose.Promise = Promise;
mongoose.connect(mogoUrl);
mongoose.connection.on('error', (error)=>console.log(error));
mongoose.connection.once('open', function() {
  console.log("mongodb connection open");
});
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});


// Router
app.use('/', router());
// app.use('/users', router());
// app.use('/auth*', router());

// remix management 
app.use('/', createRequestHandler({
    // `remix build` and `remix dev` output files to a build directory, you need
    // to pass that build to the request handler
    build: serverBuild,

    // return anything you want here to be available as `context` in your
    // loaders and actions. This is where you can bridge the gap between Remix
    // and your server
    getLoadContext(req, res) {
      return {};
    },
 }));

// Error-handling middleware
app.use(manageNotFound);

const server = http.createServer(app);

// Start the server
server.listen(expressPort, () => {
  if (process.env.NODE_ENV === "development") {
    // broadcastDevReady({ build: serverBuild });
  }
  console.log(`Express server listening on port ${expressPort}`);
});