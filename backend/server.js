import 'express-async-errors'
import express from "express";
import route from "./src/routes/index.js";
const app = express();

import http from "http";
import db from "./src/config/db.js";

import cors  from 'cors';
import helmet  from 'helmet';
import logger  from 'morgan';
import path from "path"
import { fileURLToPath } from "url";
var corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"],
  };

  app.use(cors(corsOption));
    app.use(helmet());
    app.use(logger('dev'));
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    app.use(express.json());
    app.use(express.urlencoded({extended:false}));

app.use('/api/v1',route)
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    db()
});