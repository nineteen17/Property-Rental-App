import env from 'dotenv'
import app from './app'

env.config()

const PORT = 4000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
