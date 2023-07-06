const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    work : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    confirmPassword : {
        type : String,
        required: true
    },
    tokens : [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]
})

// we are hashing the password (it convert the plain text into crypted form in the database)

userSchema.pre("save", async function(next){
if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,12)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword,12)
}

next()

})

// generating token
userSchema.methods.generateAuthToken = async function(){
    try {
        let tokenNew = jwt.sign({_id : this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token : tokenNew})
        await this.save()
        return tokenNew
    } 

    catch (error) {
        console.log(error)
    }
}

const User = mongoose.model("USER" , userSchema)

module.exports = User