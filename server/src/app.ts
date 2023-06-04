import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/AuthRoutes'
import sessionMiddleware from './middlewares/UserSession'

// Load environment variables
dotenv.config()

const app = express()

// Middleware
app.use(cors())
// allow cross origin requests from localhost:3000
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(express.json())
app.use(sessionMiddleware)

// Routes
app.use(authRoutes)

export default app
