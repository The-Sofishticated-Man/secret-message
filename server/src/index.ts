import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import user from "./routes/users";
import send from "./routes/send";
import messages from "./routes/messages";
import register from "./routes/register";
import login from "./routes/login";
import logout from "./routes/logout";
import refresh from "./routes/refresh";
import logger from "./utils/loggingUtils";
import cors from "cors";
import "./types/custom";
const app = express();

//setting up environment variables
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve("../.env") });
}

//utility middleware
app.use(express.json());
app.use(cookieParser());
// TODO: change the origin to the actual frontend URL in production
app.use(cors());

//unauthenticated routes
app.use("/users", user);
app.use("/register", register);
app.use("/login", login);
app.use("/send", send);
app.use("/refresh", refresh);
//authenticated routes
app.use("/messages", messages);
app.use("/logout", logout);

const PORT = process.env.VITE_BACKEND_PORT || 3000;
app.listen(PORT, () => {
  logger.info(new Date() + ` Server started and listening on port ${PORT}...`);
});
