import 'dotenv/config'
import express from 'express'

import Database from './database'
import usersRouter from './users/users.routers'
import tasksRouter from './tasks/tasks.routers'

const app = express()

const db = new Database(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

db.connect().then((a) => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT: ${process.env.PORT}`)
  })
})

