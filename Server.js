const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const db =require('./Config/Connection')
const AuthRouter=require('./Routes/AuthRouter')
const cors=require('cors')

db.connect((err)=>{
    if(err) console.log('connection Error'+err)
    else console.log('Database Connected')
   })
app.use(cors())  
app.use(express.json())
app.use('/api/auth',AuthRouter)   
let Server=app.listen(process.env.PORT,()=>{
    console.log('Server Started Successfully') 
})