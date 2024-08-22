import express from "express"
const router = express.Router()
import userRouter from "./users"
import connectionRouter from "./connections"

router.use("/user", userRouter)
router.use("/connection", connectionRouter)

export default router