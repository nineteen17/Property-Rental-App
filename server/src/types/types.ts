import mongoose, { Schema, Document } from 'mongoose';
import { IProperty } from '../types/Property';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    matchPassword: (enteredPassword: string) => Promise<boolean>;
    wishlist?: IProperty[];
  }