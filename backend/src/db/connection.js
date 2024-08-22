const mongoose = require("mongoose");
require('dotenv').config({ path: '.env' });
const dotenv = require("dotenv");
dotenv.config()

async function connectionDB() {
  try {
    console.log("DATABASE CONNECTION REQUEST");
    await mongoose.set("strictQuery", false);
    const options={}
    console.log(process.env.DB);
    mongoose.connect("mongodb://localhost:27017/ectask1", {

    });
    console.log("DATABASE CONNECTION SUCCESSFUL");
  } catch (error) {
    console.log(error);
  }
}

connectionDB();
