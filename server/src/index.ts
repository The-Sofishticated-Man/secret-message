import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/users";
import send from "./routes/send";
import messages from "./routes/messages";
const app = express();

//setting up environment variables
dotenv.config({ path: path.resolve("../.env") });

//utitily middleware
app.use(express.json());
app.use(cors());

//unauthenticated routes
app.use("/users", user);
app.use("/send", send);

//authenticated routes
app.use("/messages", messages);

const PORT = process.env.VITE_PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});
