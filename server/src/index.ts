import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import user from "./routes/users";
import send from "./routes/send";
import path from "path";

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
const PORT = process.env.VITE_PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});
