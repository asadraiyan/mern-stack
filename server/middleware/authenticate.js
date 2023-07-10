const jwt = require("jsonwebtoken")
const User = require("../model/userSchema")


const Authenticate = async (req, res, next)=>{
try {
    console.log("request =", req)
    const token = req?.cookies?.jwtoken

    // console.log("token =", token)

    const verifyToken =jwt.verify(token, process.env.SECRET_KEY)

    // console.log("token =", token)

    const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token" : token})
    if(!rootUser) {throw new Error("User not found")}
    req.token = token
    req.rootUser = rootUser
    req.userID = rootUser._id

    next()

} catch (error) {
    res.status(401).send("Unauthorized : No token provided")
    console.log(error)
}
}

module.exports = Authenticate