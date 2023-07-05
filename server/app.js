const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express()

dotenv.config({path: "./config.env"})

require("./db/conn")
// const User = require("./model/userSchema")

app.use(express.json())

// we link the router files to make our route easy
app.use(require("./router/auth"))
const PORT = process.env.PORT

//Middleware 
const middleware = (req,res,next)=>{
console.log("Hello my middleware")
next()
}

app.get("/", (req,res)=>{
res.send("Hello world from the server app.js")
})

app.get("/about", middleware, (req,res)=>{
    console.log("Hello my about")
res.send("Hello world from the about server")
})


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})