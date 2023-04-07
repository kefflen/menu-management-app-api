import dotenv from 'dotenv'
dotenv.config()
import server from './config/server'
import { dbConnect } from './config/dbConnect'

dbConnect()
  .then(async () => {
    server.listen(8080, () =>
      console.log('Server running at http://localhost:8080')
    )
  })
  .catch(() => console.log('DB connection failed'))
