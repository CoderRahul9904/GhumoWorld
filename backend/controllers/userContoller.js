// const User =require('../models/UserModels')


// exports.ImportUserInfo= async(req, res)=>{
//     const {userInfo} =req.body
//     if(!userInfo){
//         res.status(404).json({
//             status: "Fail",
//             message: "Something went wrong"
//         })
//     }
//     try{
//         const newUser= User.create({
//             name: userInfo.name,

//             email: userInfo.email,
//             Image: userInfo.picture
//         })
//         res.status(200).json({
//             status: "successfull",
//             data: newUser
//         })
//     }catch(err){
//         res.status(400).json({
//             status: "Fail",
//             message: "Unable to store Info"
//         })
//     }
// }


// exports.GetUserInfo=asyn(req,res){

// }