const mongoose = require("mongoose");

async function connectionDB() {
  try {
    console.log("DATABASE CONNECTION REQUEST");
    
    await mongoose.set("strictQuery", false);
    const options={}
    await mongoose.createConnection(process.env.DB,options);
    console.log("DATABASE CONNECTION SUCCESSFUL");
  } catch (error) {
    console.log(error);
  }
}

connectionDB();
