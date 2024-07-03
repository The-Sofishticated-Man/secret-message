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
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const SMUser = mongoose.model("SMUser", userSchema);

async function addNewUser(userData) {
  const newUser = new SMUser(userData);
  return newUser.save();
}
module.exports = { addNewUser };
