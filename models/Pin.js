// Build schema for pin details 

const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema({
    title:{
        type:String,
        required : [true,'must provide title']
    },
    abouts:{
        type:String,
        required : [true, 'must provide abouts']
    },
    category:{
        type:String,
        default:"NONE",

    },
    imageUrl: {
        type:String,
        required : [true, 'must provide ImageUrl']
    },
    userId: {
        type:String
        // -we will give them
    },
    postedBy:{
        type:String
    },
    savedBy: [{
        type:String,
        
    }],
    SaveComment:[{
        type:String 
    }]
})

module.exports=mongoose.model('PinSchema',PinSchema)