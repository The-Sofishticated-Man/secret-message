import mongoose from "mongoose";

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
  username: String,
  email: String,
  password: String,
});

const SMUser = mongoose.model("SMUser", userSchema);
export default SMUser;
