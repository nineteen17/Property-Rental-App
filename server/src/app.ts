import express from 'express'
import router from './routes/routes'
import cors from 'cors'
import env from 'dotenv'
env.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)
export default app
