const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')


const app=express()

app.use(express.json())  // middleware to print json data
app.use(express.urlencoded({extended:false}))


app.use('/api/auth',require('./routes/userRoutes'))


app.use(errorHandler) // it will overRide the default express error handler

 app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})