import mongoose from "mongoose";
import logger from "./loggingUtils";
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/secretMessage";
mongoose
  .connect(
    mongoURI
  )
  .then(() => {
    logger.info(`${new Date()} Connected to mongodb server on ${mongoURI}...`);
  })
  .catch((error) => {
    logger.error(`Could not connect: ${error}`);
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
