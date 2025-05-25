import "../types/custom";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/users";
import send from "./routes/send";
import messages from "./routes/messages";
import logger from "./utils/loggingUtils";
const app = express();

//setting up environment variables
if(process.env.NODE_ENV !== "PROD") {
  // Load environment variables from .env file manually in development mode
  dotenv.config({ path: path.resolve("../.env") });
}

//utility middleware
app.use(express.json());
app.use(cors());

//unauthenticated routes
app.use("/users", user);
app.use("/send", send);

//authenticated routes
app.use("/messages", messages);

const PORT = process.env.BACKEND_PORT || 3000;
app.listen(PORT, () => {
  logger.info(new Date() + ` Server started and listening on port ${PORT}...`);
});
