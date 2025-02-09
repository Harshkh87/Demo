import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

import './Models/Connection.js'
import AuthRouter from './Routes/Auth.router.js';

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.use('/',AuthRouter);

app.listen(3002);
console.log("server invoked to link http://localhost:3002");