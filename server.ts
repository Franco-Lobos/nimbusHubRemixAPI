import { createRequestHandler } from "@remix-run/express";
import {  broadcastDevReady } from "@remix-run/node";
import express from 'express';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './dbConnection/router/index.js';

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";
import { configDotenv } from "dotenv";

const app = express();

app.use(cors({
  credentials: true,
}))

const mogoUrl :string = process.env.MONGO_URL!;
// const mogoUrl  = process.env.MONGO_URL;
mongoose.Promise = Promise;
mongoose.connect(mogoUrl);
mongoose.connection.on('error', (error)=>console.log(error));

app.use(compression());
app.use(cookieParser()); //TODO : check if needed


app.use(express.static("public"));
// app.use(bodyParser.json()); !!IMPORTANT -> DO NOT USE BODY PARSER WITH REMIX IF IS A MIDDLEWARE API, IT WIL CRASH THE JSON 

// app.all("*", createRequestHandler({build: Serverb}));


app.listen(8080, () => {
  if (process.env.NODE_ENV === "development") {
    // broadcastDevReady(build);
  }
  console.log("App listening on http://localhost:8080");
});

// app.use('/', router);


