import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  addToWishlist, 
  removeFromWishlist,
} from '../controllers/userController';
import { protect } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.post('/wishlist/:propertyId', protect, addToWishlist);
router.delete('/wishlist/:propertyId', protect, removeFromWishlist);

export default router;
