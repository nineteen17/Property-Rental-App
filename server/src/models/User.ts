import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  microsoftId: string;
  displayName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  watchlist: Schema.Types.ObjectId[];  
}

const userSchema = new Schema<UserDocument>({
  microsoftId: { type: String, required: true },
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  // Adding watchlist as an array of property references
  watchlist: [{ type: Schema.Types.ObjectId, ref: 'Property' }]
});

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;
