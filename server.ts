import { createRequestHandler } from "@remix-run/express";
import {  broadcastDevReady } from "@remix-run/node";
import express from 'express';
import { ServerBuild } from '@remix-run/node'


import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './dbConnection/router/index.js';

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";
import { configDotenv } from "dotenv";

const app = express();
const serverBuild = build as unknown as ServerBuild;
const mogoUrl :string = process.env.MONGO_URL!;

app.use(cors({
  credentials: true,
}))
// app.use(cors({ origin: 'http://localhost:8080' }));


app.use(compression());
app.use(cookieParser()); //TODO : check if needed

app.use(express.static("public"));
// app.use(bodyParser.json()); !!IMPORTANT -> DO NOT USE BODY PARSER WITH REMIX IF IS A MIDDLEWARE API, IT WIL CRASH THE JSON 

app.all('*', 
  createRequestHandler({
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

app.listen(8080, () => {
  // if (process.env.NODE_ENV === "development") {
  //   broadcastDevReady({ build: serverBuild });
  // }
  console.log("App listening on http://localhost:8080");
});

mongoose.Promise = Promise;
mongoose.connect(mogoUrl);
mongoose.connection.on('error', (error)=>console.log(error));
app.use('/', router);


