import { Request, Response, Router } from 'express';
import User from '../models/users';

const authRouter = Router();

authRouter.post('/register', async (req: Request, res: Response) => {
  res.json({ message: 'Sign up route' });
});

authRouter.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'Sign in route' });
});

export default authRouter;
