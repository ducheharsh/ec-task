const mongoose = require("mongoose")
const Connection = require("../models/connectionModel.js")
const User = require("../models/userModel.js")

const createConnection = async(req, res) =>{

    const {user1Id, user2Id} = req.body
    try{
        const connection = await Connection.create({user1:user1Id, user2:user2Id, status:"pending"})
        if(!connection){
            return res.status(400).json({message:"Connection not created",
            success:false
            })
        }
        const user1 = await User.findById(user1Id)
        if(!user1){
            return res.status(404).json({message:"User not found"})
        }
        const user2 = await User.findById(user2Id)
        if(!user2){
            return res.status(404).json({message:"User not found"})
        }
        user1.connections.push(connection._id)
        user2.connections.push(connection._id)
        await user1.save()
        await user2.save()
        
        return res.status(201).json({
            success:true,
            connection
        })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({message:"Internal server error"})
    }
}

const acceptConnection = async(req, res) =>{
    const {id} = req.params

    try{
    const connection = await Connection.findByIdAndUpdate({
        _id:id
    },
    {
        status:"accepted"
    },
    {
        new:true
    })

    if(!connection){
        return res.status(404).json({message:"Connection not found"})
    }
    return res.status(200).json({
        success:true,
        connection
    })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({message:"Internal server error"})
    }

    
}

const updateConnection = async(req, res) =>{
    const {id} = req.params
    const {status} = req.body

    try{
        if(status === "accepted"){
            return acceptConnection(req, res)
        }
        const deleteConnection = await Connection.findByIdAndDelete(id)
        if(!deleteConnection){
            return res.status(404).json({message:"Connection not found"})
        }
        return res.status(200).json({
            success:true,
            message:"Connection deleted"
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({message:"Internal server error"})
    }
    
}

module.exports = {createConnection, updateConnection, acceptConnection}