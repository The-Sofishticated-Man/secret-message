const express = require("express");
const exValidator = require("express-validator");
const cors = require("cors");
const { addNewUser } = require("./mongoAPI");

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

//api
app.post("/register", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  addNewUser(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(400).send(error.message);
    });
});
