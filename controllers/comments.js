const Comment = require('../models/Comment')
const asyncWrapper = require('../middleware/async')

const getAllcomment = asyncWrapper(async(req,res) =>{
    const comments = await Cooment.find()
    res.status(200).jason({ commments })
})

const createComment = asyncWrapper(async(req,res) =>{
       const comment = await commnet.create(req.body)
       res.status(201).json({ comment })
})

