// This is the controller for authentication things
const User = require('../models/User')

const login = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email)
    console.log(password)
    if(!email||!password)
    {
        console.log("Please provide both email and password")
    }
    const user = await User.findOne({email});
    console.log(password)
    if(!user)
    {
        
        console.log("Wrong Credentials")
        
    }
    console.log(user)
    const isAuth = await user.checkPassword(password)
    if(!isAuth)
    {
        console.log("here")
        console.log("Wrong Credentials")
        
    }

    const token = user.createJWT();
    res.json({User:{email:user.email},token})
    
}

const register = async ( req,res)=>{
    console.log({...req.body})
   const user = await User.create({...req.body})

   const token = user.createJWT();
   res.json({user:{user:{email:user.email}},token})
}

module.exports ={login,register}