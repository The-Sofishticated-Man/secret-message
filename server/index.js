const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});

app.post("/register", (req, res) => {
  console.log("got request:\n");
  console.log(req.body);
  res.send(req.body);
});
