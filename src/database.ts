import { connect, connection } from 'mongoose'

connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`)

connection.once('open', function() {
  console.log('MongoDB database connection established successfully')
})
