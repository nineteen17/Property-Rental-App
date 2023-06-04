import { Request, Response } from 'express'
import passport from 'passport'
import { UserDocument } from '../../models/User'
import {
  findUserByMicrosoftId,
  createUser,
  findUserById,
} from '../../services/UserService'
import { logoutUser } from '../../services/UserService'

export const microsoftAuth = passport.authenticate('microsoft', {
  session: true,
})

export const microsoftAuthCallback = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.user) {
      console.error('req.user is undefined')
      res.status(500).send('Internal server error')
      return
    }

    const { id, displayName, emails } = req.user as any
    const email = emails?.[0].value

    let user = await findUserByMicrosoftId(id)

    if (!user) {
      user = await createUser(id, displayName, email, '', '')
      await user.save()
    }

    res.send(user)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    // Ensure that req.user is not undefined or null before trying to access its 'id' property.
    if (typeof req.user !== 'undefined' && req.user !== null) {
      const userId = (req.user as UserDocument).id
      const user = await findUserById(userId)

      if (!user) {
        res.status(404).json({ error: 'User not found' })
      } else {
        res.json(user)
      }
    } else {
      console.log('req.user is undefined or null')
      // You may want to return a response here indicating that req.user is not available.
      // res.status(400).json({ error: "No user information available in request" });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const logout = async (req: Request, res: Response) => {
  try {
    const { id } = req.user as any

    await logoutUser(id)

    res.status(200).json({ message: 'User logged out successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
}
