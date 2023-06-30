const express = require('express')
const connectDatabase = require('./utils/db.js')

const app = express()

app.use(express.json());
require('dotenv').config()


const registerRoute = require('./routes/registrationRoute')

app.use('/', registerRoute)

app.listen(3000, ()=>{
    connectDatabase()
    console.log('Server is running on port 3000')
})