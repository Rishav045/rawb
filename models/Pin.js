// Build schema for pin details 

const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema({
    Title:{
        type:String,
        required : [true,'must provide title']
    },
    Abouts:{
        type:String,
        required : [true, 'must provide abouts']
    },
    category:{
        type:String

    },
    ImageUrl: {
        type:String,
        required : [true, 'must provide ImageUrl']
    },
    UserId: {
        type:String
        // -we will give them
    },
    PostedBy:{
        type:String
    },
    save: [{
        type:String,
        
    }],
    SaveComment:[{
        type:String 
    }]
})

module.exports=mongoose.model('PinSchema',PinSchema)