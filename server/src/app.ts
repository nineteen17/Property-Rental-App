import express from 'express'
import propertyRouter from './routes/properties'
import cors from 'cors'
import env from 'dotenv'
import mongoose from 'mongoose'

env.config()

mongoose
    .connect(process.env.MONGO_URL as string)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => console.log(err));

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/properties", propertyRouter)

export default app
