const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authenticate = require("../middleware/authenticate")

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from the router server");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ erorr: "Please fill all the details" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ erorr: "Email is already exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body
        if (!email || !password){
            return res.status(422).json({ erorr: "Please fill all the details" });

        }
        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin)

        if(userLogin){

          const isMatch = await bcrypt.compare(password, userLogin.password)

          const token = await userLogin.generateAuthToken()
          console.log(token)

          res.cookie("jwtoken", token,{
            expires : new Date(Date.now() + 24792000000),
            httpOnly : true
          })
        
          if(!isMatch){
              res.status(400).json({erorr: "Invalid credential"})
          }
          else{
              res.json({message:"User is signin successfully"})
          }
        }
        else{
          res.status(400).json({erorr: "Invalid credential"})
        }

       
    } catch (error) {
        console.log(error)
    }
   
})


// About page
router.get("/about", authenticate, (req,res)=>{
  console.log("Hello my about")
res.send(req.rootUser)
// res.cookie("test", "asad")
})

module.exports = router;
