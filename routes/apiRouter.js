import express from 'express';
import { menusController } from '../controllers/menusController.js'; // Hantera menyer
import { openingHoursController } from '../controllers/openingHoursController.js'; //Hanterar opening hours
import { getAllData } from '../functions/getAllData.js';

export const apiRouter = express.Router();

apiRouter.get('/', getAllData);

apiRouter.get('/menus', menusController); // Ex: /api/menus för att lista alla menyer

apiRouter.get('/menus/:menuId', menusController); // Ex: /api/menus/weekly-lunch för en specifik meny

apiRouter.get('/opening-hours', openingHoursController);
