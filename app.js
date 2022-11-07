import express from 'express';
import connectDB from './config/db.js';

const app = express();

connectDB();

import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

export default app;