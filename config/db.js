const mongoose = require("mongoose")
 mongoose.connect(process.env.MONGOURL||"mongodb+srv://Dinesh:DINESH_2004@mern.1yf3w.mongodb.net/?retryWrites=true&w=majority&appName=MERN")
 const connection=mongoose.connection;
 connection.on('connected',()=>{
    console.log("DB CONNECTED")
 }
)
connection.on('error',()=>console.log("DB ERROR"))
module.exports=mongoose