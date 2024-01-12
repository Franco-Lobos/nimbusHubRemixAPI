import { createRequestHandler } from "@remix-run/express";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./dbConnection/router/index.js";
import http from "http";
import * as build from "./build/index.js";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
const app = express();
const serverBuild = build;
const mogoUrl = process.env.MONGO_URL;
const expressPort = 8080;
app.use(cors({
  credentials: true
}));
app.use(compression());
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.json());
//!!IMPORTANT -> DO NOT USE BODY PARSER WITH REMIX IF IS A MIDDLEWARE API, IT WIL CRASH THE JSON 
mongoose.Promise = Promise;
mongoose.connect(mogoUrl);
mongoose.connection.on("error", (error) => console.log(error));
app.use("/", router());
app.use("/", createRequestHandler({
  // `remix build` and `remix dev` output files to a build directory, you need
  // to pass that build to the request handler
  build: serverBuild,
  // return anything you want here to be available as `context` in your
  // loaders and actions. This is where you can bridge the gap between Remix
  // and your server
  getLoadContext(req, res) {
    return {};
  }
}));
app.use(function(req, res) {
  res.json({
    error: {
      "name": "Error",
      "status": 404,
      "message": "Invalid Request",
      "statusCode": 404,
      "stack": "http://localhost:8081/"
    },
    message: "Testing!"
  });
});
const server = http.createServer(app);
server.listen(expressPort, () => {
  if (process.env.NODE_ENV === "development") {
  }
  console.log(`Express server listening on port ${expressPort}`);
});
