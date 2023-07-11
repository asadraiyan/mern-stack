const dotenv = require("dotenv")
const express = require("express")
const app = express()
const cookieparser = require("cookie-parser");
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.options("*", cors());

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


app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})