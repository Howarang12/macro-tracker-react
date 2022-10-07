const mongoose = require('mongoose')

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to database...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase