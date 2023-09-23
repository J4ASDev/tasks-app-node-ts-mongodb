import 'dotenv/config'
import express from 'express'

import Database from './database'

const app = express()

const db = new Database(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)

app.use(express.json())

db.connect().then((a) => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`)
  })
})

