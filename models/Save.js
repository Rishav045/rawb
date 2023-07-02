// Create schema about Save who have saved the particular post

const mongoose = require("mongoose")

const SaveSchema = new mongoose.Schema({
    PostedBy:{
        type:String
        

    },
    USerId:{
        type:String,
        // -we will give them

    }
})

module.exports=mongoose.model('SaveSchema',SaveSchema)