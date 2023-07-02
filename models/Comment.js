// Create Schema about Comments

const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    PostedBy:{
        type:String
    },
    Comment:{
        type:String
    }
})

module.exports=mongoose.model('CommentSchema',CommentSchema)