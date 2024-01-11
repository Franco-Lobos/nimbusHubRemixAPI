import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";
import express from 'express';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

// notice that the result of `remix build` is "just a module"
import * as build from "./build/index.js";
import { configDotenv } from "dotenv";

const mongoUrl = process.env.MONGO_URL;

const app = express();

app.use(cors({
  credentials: true,
}))

const mogoUrl  = process.env.MONGO_URL;
console.log(mogoUrl);
mongoose.Promise = Promise;
mongoose.connect(mogoUrl);
mongoose.connection.on('error', (error)=>console.log(error));

app.use(compression());
app.use(cookieParser()); //TODO : check if needed
app.use(bodyParser.json());

app.use(express.static("public"));

// and your app is "just a request handler"
 app.all("*", createRequestHandler({ build }));

app.listen(8080, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  console.log("App listening on http://localhost:8080");
});

// app.use('/', router());


