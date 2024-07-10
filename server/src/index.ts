import express from "express";
import cors from "cors";
import user from "./routes/user"
const app = express();

//utitily middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/user",user)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});

