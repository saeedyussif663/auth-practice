import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import authRouter from './routes/authRoutes';

const app = express();

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Typescript auth');
});

app.use('/api/auth/', authRouter);

app.listen(3000, () => {
  mongoose
    .connect(
      'mongodb+srv://saeedyussif663:bpLGcuwggJp1DghH@my-projects.ivoyo.mongodb.net/auth-practice'
    )
    .catch((err) => console.log('An error occured connection to db'));
  console.log('Application started on port 3000!');
});
