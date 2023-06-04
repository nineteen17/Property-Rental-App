import mongoose, { Document, Schema } from 'mongoose';
import { PropertyDocument } from './Property'; // Assuming this is the name and location of your Property model

interface UserDocument extends Document {
  googleId: string;
  email: string;
  password: string;
  watchlist: PropertyDocument[];
}

const userSchema = new Schema<UserDocument>({
  googleId: { type: String },
  email: { type: String, required: true },
  password: { type: String },
  watchlist: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
});

export default mongoose.model<UserDocument>('User', userSchema);
