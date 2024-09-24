const express = require('express')
const app = express()
const dbConn =require('./config/db')
require('dotenv').config()
const Projects=require('./routes/projectRoute')
// const dotenv = require('dotenv')
// dotenv.config()

const port = process.env.PORT || 3335
app.use('/projects',Projects) 
app.use(express.json())
app.get('/' , (req,res) => {
    res.json("Welcome").status(400)
})

app.listen(port,() => {
    console.log(`Server running in : ${port}`)
})