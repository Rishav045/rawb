// Create Schema about Comments

const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    PostedBy:{
        type:String,
        
    },
    Comment:{
        type:String,
        maxlength: [100, 'provide less than 100 charaters ']
        
    }
})

module.exports=mongoose.model('CommentSchema',CommentSchema)