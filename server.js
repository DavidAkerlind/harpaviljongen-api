import express from 'express';
import cors from 'cors';
import { apiRouter } from './routes/apiRouter.js';

const app = express();
const PORT = 7000;

app.use(cors());
app.use('/api', apiRouter);
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
