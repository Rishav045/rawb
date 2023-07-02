// THis is the controller for image uploading to cloud 
const path = require('path')
const {StatusCodes} =require('http-status-codes')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const uploadImage = async(req,res)=>{
    console.log(req.files.image)
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
        use_filename:true,
        folder:'file-upload',
    });
    console.log(result);
    fs.unlinkSync(req.files.image.tempFilePath)
    console.log(result.secure_url);
    return res.status(StatusCodes.OK).json({image:{src:result.secure_url}})
}

module.exports={uploadImage}