import 'dotenv/config'
import './database'

import express from 'express'

const app = express()

app.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`))
