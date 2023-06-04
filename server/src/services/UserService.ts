import { log } from 'console'
import User, { UserDocument } from '../models/User'

export const findUserById = async (
  id: string
): Promise<UserDocument | null> => {
  return User.findById(id)
}

export const findUserByMicrosoftId = async (
  microsoftId: string
): Promise<UserDocument | null> => {
  return User.findOne({ microsoftId })
}

export const createUser = async (
  microsoftId: string,
  displayName: string,
  email: string,
  accessToken: string,
  refreshToken: string
): Promise<UserDocument> => {
  try {
    // Simple validation checks
    if (!microsoftId) throw new Error('MicrosoftId is required');
    if (!displayName) throw new Error('DisplayName is required');
    if (!email) throw new Error('Email is required');
    if (!accessToken) throw new Error('AccessToken is required');
    if (!refreshToken) throw new Error('RefreshToken is required');

    const user = new User({
      microsoftId,
      displayName,
      email,
      accessToken,
      refreshToken,
    })

    // Log the user data before saving
    console.log('Creating user:', user);

    return await user.save()
  } catch (error) {
    console.error('Error creating user:', error)
    throw new Error('Failed to create user')
  }
}

export const logoutUser = async (id: string) => {
  try {
    const user = await findUserById(id)

    if (!user) {
      throw new Error('User not found')
    }

    user.accessToken = ''
    user.refreshToken = ''

    await user.save()
  } catch (error) {
    console.error('Error logging out user:', error)
    throw new Error('Failed to logout user')
  }
}
