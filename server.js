import express from 'express';
import cors from 'cors';
import { fallbackController } from './controllers/fallbackController.js';
import { menuRouter } from './routes/menuRouter.js';
import { openingHoursRouter } from './routes/openingHoursRouter.js';
import { allDataRouter } from './routes/allDataRouter.js';

const app = express();
const PORT = 7000;

//  ===== Middlewares =====

app.use(express.json());
app.use(cors());

// ===== ===== ===== =====

app.use('/api/menus', menuRouter);
app.use('/api/opening-hours', openingHoursRouter);
app.use('/api', allDataRouter);

app.use((req, res) => {
	fallbackController(req, res);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
