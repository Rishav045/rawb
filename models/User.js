// Create user schema as described in the plan 

const mongoose= require("mongoose")

const UserSchema =new mongoose.Schema({
    UserName :{
        type:{
            type:String,
            required : [true,'must provide username']
        }
    },
    ImageUrl :{
        typ :String,
        require : [true,'must provide Image']
    },
    Email :{
        type:String,
        required: [true,'must provide Email']
    }
})

module.exports=mongoose.model('UserSchema',UserSchema)