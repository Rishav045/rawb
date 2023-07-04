// This is the controller for Pin post
const Pin = require('../models/Pin') 

const createPin = async(req,res)=>{
    console.log({...req.body})
    const pin = await Pin.create({...req.body})

    res.json({pin})
}

const getPin = async(req,res)=>{
    console.log(req.params.pin_id)
    const pin = await Pin.findById(req.params.pin_id)
    res.json({pin})
}
const updatePin = async(req,res)=>{
    const {id,save}= req.body;
    const updatedPin = await Pin.findByIdAndUpdate(id,
        {$push:{savedBy:save}},
        {safe:true,upsert:true})
   res.json({updatedPin})
}

const getAllPin=async(req,res)=>{
    const pins = await Pin.find({})
    res.json({pins})
}

module.exports = {createPin,getPin,getAllPin,updatePin}