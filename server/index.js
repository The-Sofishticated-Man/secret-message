const express = require("express");
const cors = require("cors");
const { SMUser } = require("./mongoAPI");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});

//api
app.post("/register", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  SMUser.create(formData)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log("Error creating user", error);
      res.status(400).send(error);
    });
});
