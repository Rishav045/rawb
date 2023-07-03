// Create user schema as described in the plan 

const mongoose= require("mongoose")
const jwt = require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const UserSchema =new mongoose.Schema({
    name :{
        type:String,
        required:[true,"Must provide username"]
    },
    ImageUrl :{
        type :String,
        // required : [true,'must provide Image']
    },
    email :{
        type:String,
        required: [true,'must provide Email'],
        unique:true
    },
    password:{
        type:String,
        minlength:5,
        required:[true,"Password cannot be empty"]
    }
})
UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
})
UserSchema.methods.createJWT = function (){
    return jwt.sign({UserId:this.id,name:this.name},'q4t7w9z$C&F)J@NcRfUjXn2r5u8x/A%D',{expiresIn:'30d'})
}

UserSchema.methods.checkPassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password)
    return isMatch
}
module.exports=mongoose.model('User',UserSchema)