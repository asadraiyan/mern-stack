// const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cookieparser = require("cookie-parser");

dotenv.config({path: "./config.env"})

require("./db/conn")
// const User = require("./model/userSchema")

app.use(express.json())
app.use(cookieparser());

// we link the router files to make our route easy
app.use(require("./router/auth"))
const PORT = process.env.PORT

app.get("/", (req,res)=>{
res.send("Hello world from the server app.js")
})

// app.get("/about", (req,res)=>{
//     console.log("Hello my about")
// res.send("Hello world from the about server")
// // res.cookie("test", "asad")
// })


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})