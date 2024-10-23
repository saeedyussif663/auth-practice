import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minlength: [3, 'Name must be at least 3 characters long'],
    },
    email: {
      type: String,
      unique: [true, 'Email already exist'],
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
      type: String,
      min: [8, 'Password should be atleast 8 characters'],
      required: [true, 'Password is required'],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        'Password should include at least an/a uppercase, lowercase, number and character',
      ],
    },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;
