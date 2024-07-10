import express from "express";
const router = express.Router();
import { validationResult } from "express-validator";
import SMUser from "../mongoAPI";
import { registerValidationSchema } from "../validationUtils";
import argon2 from "argon2";

router.post(
  "/register",
  registerValidationSchema,
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    console.log("Validation result: ", errors);
    const formData = req.body;
    console.log("User creation request: ", formData);

    //only adds user if there are no errors
    if (errors.length !== 0) {
      res.status(400).send(errors);
    } else {
      argon2
        .hash(formData.password)
        .then((hashedPassword) => {
          SMUser.create({ ...FormData, password: hashedPassword })
            .then((data) => {
              console.log("created user successfully:");
              res
                .status(201)
                .json({ message: "User created successfully", user: data });
            })
            .catch((err) => {
              //this triggers when mongoose fails to create the user
              console.error("Error creating user", err);
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          //this triggers when argon fails to hash the password
          console.error("Couldn't hash password");
          res.status(500).json({ error: err });
        });
    }
  }
);

export default router;