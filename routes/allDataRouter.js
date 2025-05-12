import express from 'express';

import { getAllData } from '../functions/getAllData.js';

export const allDataRouter = express.Router();

allDataRouter.get('/', getAllData);
