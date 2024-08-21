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
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  secretMessages: {
    type: [{ message: String, date: Date }],
    default: [],
  },
});

const SMUser = mongoose.model("SMUser", userSchema);
export default SMUser;
