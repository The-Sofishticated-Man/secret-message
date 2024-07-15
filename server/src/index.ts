import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import user from "./routes/users";
import path from "path";
import authenticate from "./middleware/authentication";

const app = express();

//setting up environment variables
dotenv.config({ path: path.resolve("../.env") });

//utitily middleware
app.use(express.json());
app.use(cors());

//unauthenticated routes
app.use("/users", user);

//authenticated routes
app.use(authenticate);
const PORT = process.env.VITE_PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});
