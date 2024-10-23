import { Request, Response, Router } from 'express';
import { createAccount } from '../controllers/authControllers';

const authRouter = Router();

authRouter.post('/register', createAccount);

authRouter.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'Sign in route' });
});

export default authRouter;
