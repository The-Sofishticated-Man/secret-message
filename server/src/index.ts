import express from "express";
import cors from "cors";
import {  validationResult } from "express-validator";
import SMUser from "./mongoAPI";
import { registerValidationSchema } from "./validationUtils";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(new Date() + ` Server started and listening on port ${PORT}...`);
});

//api
app.post(
  "/register",
  registerValidationSchema,
  async (req: express.Request, res: express.Response) => {
    const formData = req.body;
    const errors = validationResult(req).array({ onlyFirstError: true });
    console.log("validation result: ", errors);
    console.log(formData);

    //only adds user if there are no errors
    if (errors.length) {
      res.status(400).send(errors);
    } else {
      SMUser.create(formData)
        .then((data) => {
          console.log("created user successfully:");
          res.send(data);
        })
        .catch((error) => {
          console.log("Error creating user", error);
          res.status(500).send(error);
        });
    }
  }
);
