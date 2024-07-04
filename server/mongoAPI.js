const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/secretMessage")
  .then(() => {
    console.log(`${new Date()} Connected to mongodb server`);
  })
  .catch((error) => {
    console.error(`Could not connect:`);
    console.error(error);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "Username already taken"],
    min: [3, "Username must be at least 3 characters long."],
    max: [18, "Username must be at most 18 characters long."],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "This email is already in use"],
    //matches to Email regular expression (basically checks if it's a valid email)
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email not valid"],
  },
  password: { type: String, required: true },
});

const SMUser = mongoose.model("SMUser", userSchema);
module.exports = { SMUser };
