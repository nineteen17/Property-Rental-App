import express from 'express'
import propertyRouter from './routes/properties'
import helloRouter from './routes/properties'
import cors from 'cors'
import env from 'dotenv'

env.config()

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/hello", helloRouter)
app.use("/api/properties", propertyRouter)

export default app
