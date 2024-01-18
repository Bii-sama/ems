require('dotenv').config();

const express = require('express');


const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()


//middlewares

app.use(express.json())
app.use(cookieParser()) //Helps you know a user's preference on your website
app.use(logger('dev'))  //Helps you write/note all the activities a user does on a website
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT || 8000;


//main middleware

app.use((req, res, next)=>{
  console.log(req.url, req.method)
  next()
})


//connect database

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(port, ()=>{
    console.log("DB Connected and we are up!!!")
  })
}).catch((error)=>{
  console.log(error)
})