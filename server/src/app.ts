import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/AuthRoutes'

dotenv.config()

import propertyRouter from './routes/properties'


const app = express()
app.use(cookieParser());
// Middleware

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(express.json())

// Routes
app.use(authRoutes)
app.use("/api/properties", propertyRouter)

export default app
