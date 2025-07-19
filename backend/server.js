const app=require('./app')
const {userDB,airportDB}=require('./db')
const User=require('./models/UserModels')


console.log(process.env.PORT)
const PORT=process.env.PORT || 3000

app.listen(PORT,(error)=>{
    if(!error){
        console.log("Server is created, Sucessfully")
    }else{
        console.log("Failed to create Server")
    }
})