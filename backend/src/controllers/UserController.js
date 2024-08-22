
const User = require("../models/userModel.js")
const Connection = require("../models/connectionModel.js")

 const getUser = async(req, res) =>{

    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        return res.status(200).json({
            success:true,
            user
        })
    }
    
    catch(e){
        console.log(e)
    }
    
    
}

 const createUser = async(req, res) =>{

    try{
        const user = await User.create(req.body)
        if(!user){
            return res.status(400).json({message:"User not created",
            success:false
            })
        }
        return res.status(201).json({
            success:true,
            user
        })

    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            success:false,
            error:e
        })
    }
}


module.exports = {getUser, createUser}