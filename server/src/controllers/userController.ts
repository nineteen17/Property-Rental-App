import asyncHandler from 'express-async-handler'
import User from '../models/User'
import { Request, Response } from 'express'
import { generateToken } from '../services/authService'
import Property from '../models/Property';

export const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id)

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    const user = await User.create({
      name,
      email,
      password,
    })

    if (user) {
      generateToken(res, user._id)

      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }
)

export const logoutUser = (req: Request, res: Response) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: 'Logged out successfully' })
}

export const getUserProfile = asyncHandler(async (req: any, res: Response) => {
  const user = await User.findById(req.user._id).populate('wishlist');

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      wishlist: user.wishlist,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export const updateUserProfile = asyncHandler(
  async (req: any, res: Response) => {
    const user = await User.findById(req.user._id)

    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email

      if (req.body.password) {
        user.password = req.body.password
      }

      const updatedUser = await user.save()

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  }
)


export const addToWishlist = asyncHandler(async (req: any, res: Response) => {
    const { propertyId } = req.params;
    const user = await User.findById(req.user._id);
  
    if (user) {
      const property = await Property.findById(propertyId);
  
      if (property) {
        if (user.wishlist?.includes(propertyId)) {
          res.status(400);
          throw new Error('Property already in wishlist');
        } else {
          user.wishlist?.push(propertyId);
          await user.save();
          res.status(201).json({ message: 'Property added to wishlist' });
        }
      } else {
        res.status(404);
        throw new Error('Property not found');
      }
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });
  

  export const removeFromWishlist = asyncHandler(async (req: any, res: Response) => {
    const { propertyId } = req.params;
    const user = await User.findById(req.user._id);
  
    if (user && user.wishlist) {
      const index = user.wishlist.indexOf(propertyId);
  
      if (index !== -1) {
        user.wishlist.splice(index, 1);
        await user.save();
        res.status(200).json({ message: 'Property removed from wishlist' });
      } else {
        res.status(400);
        throw new Error('Property not found in wishlist');
      }
    } else {
      res.status(404);
      throw new Error('User not found');
    }
  });
  
  