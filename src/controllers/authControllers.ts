import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users';

export async function createAccount(req: Request, res: Response) {
  const { email, name, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({ message: 'Email already exists' });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const data = await User.create({ email, name, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', data: data });
    return;
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422).json({ message: error.message.split(':')[2] });
      return;
    }

    res
      .status(500)
      .json({ message: 'An error occured creating user, try agin.' });
    return;
  }
}
