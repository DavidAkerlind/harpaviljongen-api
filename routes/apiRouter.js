import express from 'express';
import { getAllData } from '../controllers/getAllData.js';

export const apiRouter = express.Router();

apiRouter.get('/', getAllData);
