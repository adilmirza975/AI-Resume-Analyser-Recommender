const mongoose = require("mongoose")

async function connectToDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI)
    // jaise hi DB connect hoga waise hi log karwa do
  console.log("Connected to Database")
}catch(err){
  console.log(err)
}
}

module.exports = connectToDB