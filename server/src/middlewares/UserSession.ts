import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import { Strategy as MicrosoftStrategy } from 'passport-microsoft'
import express from 'express'
import { findUserById, findUserByMicrosoftId, createUser } from '../services/user/UserService'
// Load env vars
import env from 'dotenv'
env.config()

const sessionMiddleware = express()

// Configure session storage
const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: 'sessions', // Optional. Use default 'sessions' if not specified
})

sessionMiddleware.use(
  session({
    secret: process.env.SESSION_SECRET!, 
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, 
    },
  })
)

passport.use(
  new MicrosoftStrategy(
    {
      clientID: process.env.MICROSOFT_CLIENT_ID!,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET!,
      callbackURL: process.env.MICROSOFT_CALLBACK_URL!,
      scope: ['user.read'],
    },
    async (accessToken: string, refreshToken: string, profile: any, done: any) => {
      console.log('MicrosoftStrategy callback profile:', profile);
      const { id, displayName, emails } = profile;
      const email = emails[0].value;
      let user = await findUserByMicrosoftId(id);

      if (!user) {
        user = await createUser(id, displayName, email, accessToken, refreshToken);
      }

      console.log('MicrosoftStrategy callback user:', user);
      done(null, user);
    }
  )
);

  

// Add Passport middleware
sessionMiddleware.use(passport.initialize())
sessionMiddleware.use(passport.session())

passport.serializeUser((user: any, done: any) => {
  done(null, user);
});

passport.deserializeUser(async (id: any, done: any) => {
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


  
export default sessionMiddleware
