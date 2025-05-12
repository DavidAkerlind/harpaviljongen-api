import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/apiRouter.js';
import { fallbackController } from './controllers/fallbackController.js';

const app = express();
const PORT = 7000;

//  ===== Middlewares =====

app.use(express.json());
app.use(cors());

// ===== ===== ===== =====

app.use('/api', apiRouter);

app.use((req, res) => {
	fallbackController(req, res);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
