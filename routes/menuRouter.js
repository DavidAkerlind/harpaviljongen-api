import express from 'express';
import { deleteMenu, menusController } from '../controllers/menusController.js'; // Hantera menyer
import { fallbackController } from '../controllers/fallbackController.js';

export const menuRouter = express.Router();

menuRouter.get('/', menusController); // Ex: /api/menus för att lista alla menyer

menuRouter.get('/:menuId', menusController); // Ex: /api/menus/weekly-lunch för en specifik meny

menuRouter.delete('/:menuId', deleteMenu);

menuRouter.use(fallbackController);
