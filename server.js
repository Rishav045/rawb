const express = require('express')
const cloudinary = require('cloudinary').v2
const fileUpload = require('express-fileupload')
const imageUpload = require('./Routes/PinUpload')
const authRoute = require('./Routes/auth')
const connectDB = require('./Db/Connect')
const cors = require('cors')
require('dotenv').config()
require('express-async-errors')

const app = express();
cloudinary.config(
    {
        cloud_name:"dhxj4w8th",
        api_key:159331216765633,
        api_secret:"cbYQHEPDovgv9NgYHvWy4Krr-sk"
    }
)

app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.use(fileUpload({useTempFiles:true,tempFileDir:'/tmp/'}))
app.get('/',(req,res)=>{
    res.send("Hello there")
})
app.get('/home',(req,res)=>{
    res.send("This is the home page")
})
app.use('/uploads',imageUpload)
app.use('/auth',authRoute);
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,()=>{
            console.log("Server is listening on the port 3000")
        })

    }catch(error){
        console.log(error)
    }
}
start()