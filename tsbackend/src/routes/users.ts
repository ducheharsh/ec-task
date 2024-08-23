import express from "express";
const router = express.Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import z, { any } from "zod";
import * as argon2 from "argon2";
import { JWT_SECRET } from "../config";

//Zod Validation (for User object)
const userSchema = z.object({
  username: z.string().max(50, { message: "is very loooooong" }).optional(),
  email: z.string().email({ message: "must be a valid email" }),
  password: z.string().min(8, { message: "is Too short" }),
  profilePicture: z.string().optional(),
  coverPicture: z.string().optional(),
});

//signup endpoint
router.post("/signup", async (req, res) => {
  const parsedData = userSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({ error: parsedData.error });
  }

  //Argon2 for password hashing instead of bycrypt
  const hashedPass = await argon2.hash(req.body.password);

  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: hashedPass,
        username: req.body.username,
        profilePicture: req.body.profilePicture,
        coverPicture: req.body.coverPicture,
      },
    });
    const userId = user.id;
    // signing the userId with Json Web Token and returning it
    const jwttoken = jwt.sign({ userId }, JWT_SECRET);

    res.json({
      msg: "User Created Successfully",
      token: jwttoken,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Unable to create user",
      error: error,
    });
  }
});

//signin endpoint
router.post("/signin", async (req, res) => {
  const parsed = userSchema.safeParse(req.body);
  console.log(parsed);
  if (!parsed.success) {
    res.status(400).json({
      error: parsed.error,
    });
    return;
  }
  console.log(req.body.username);

  const user = await prisma.user.findUnique({
    where: {
      email: req.body.username,
    },
  });
  console.log(user);
  if (user) {
    try {
      if (await argon2.verify(user.password || "", req.body.password)) {
        const jwttoken = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.json({
          token: jwttoken,
        });
      } else {
        res.status(400).json({
          msg: "Invalid Password",
        });
      }
    } catch (err) {
      res.json({
        msg: "Invalid Password",
        err: err,
      });
    }
  } else {
    res.status(400).json({
      msg: "User not found",
    });
  }
});

export default router;
