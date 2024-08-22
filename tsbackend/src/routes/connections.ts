import express from "express";
const router = express.Router()
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import userAuth from "../middlewares/userAuth";

router.use(userAuth)

router.post("/sendConnection" , async(req, res) =>{
    const {user1Id, user2Id} = req.body
    try{
        const connection = await prisma.connection.create({
            data:{
                user1Id,
                user2Id,
            }
            }
        )
        if(!connection){
            return res.status(400).json({message:"Connection not created",
            success:false
            })
        }
        const user1 = await prisma.user.update({
            where:{
                id:user1Id
            },
            data: {
                sentConnections:{
                    connect:{
                        id:connection.id
                    }
                }
            }
        })
        if(!user1){
            return res.status(404).json({message:"User not found"})
        }
        const user2 = await prisma.user.update({
            where:{
                id:user2Id
            },
            data:{
                receivedConnections:{
                    connect:{
                        id:connection.id
                    }
            }
        }
        })
     
        
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
)

router.post("/acceptConnection/:id", async(req, res) =>{
    const {id} = req.params

    try{
    const connection = await prisma.connection.update({
    where:{
        id:id
    },
    data:{
        status:"accepted"
    }
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

    
})

router.post("/declineConnection/:id" ,async(req, res) =>{
    const {id} = req.params
    const {status} = req.body

    try{

        const deleteConnection = await prisma.connection.delete({
            where:{
                id
            }
        }
        )
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
    
})

export default router