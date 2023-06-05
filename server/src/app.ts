import express from 'express'

import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/AuthRoutes'
import propertyRouter from './routes/propertiesRoutes'

dotenv.config()

const app = express()

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
