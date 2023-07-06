const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
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
    }
})

// we are hashing the password (it convert the plain text into crypted form in the database)

userSchema.pre("save", async function(next){
if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,12)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword,12)
}

next()

})

const User = mongoose.model("USER" , userSchema)

module.exports = User