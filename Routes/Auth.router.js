import express from 'express';
const router = express.Router();

import * as AuthController from '../Controller/Auth.controller.js'; 

router.post("/register",AuthController.register);

router.post("/login",AuthController.login);

export default router;


