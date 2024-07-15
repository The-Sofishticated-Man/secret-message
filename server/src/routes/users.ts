import express from "express";
const router = express.Router();
import { validationResult } from "express-validator";
import SMUser from "../utils/mongoAPIUtils";
import { registerValidationSchema } from "../utils/validationUtils";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

function createJWTToken(_id: string) {
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "7d",
  });
}

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
          SMUser.create({ ...formData, password: hashedPassword })
            .then((data) => {
              console.log("created user successfully:");
              const jwtToken = createJWTToken(data.id);
              res.status(201).json({
                message: "User created successfully",
                user: data.username,
                jwtToken,
              });
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

router.post("/login", (req, res) => {
  const loginFields = req.body;
  console.log("Login attempt: ", loginFields);
  SMUser.findOne({ email: loginFields.email }).then(async (user) => {
    if (!user) {
      console.error("Login failed: user does not exist");
      res.status(401).json({ message: "Login failed" });
    } else {
      try {
        if (
          !(await argon2.verify(user.password as string, loginFields.password))
        ) {
          console.error("Login failed: password does not match");
          res.status(401).json({ message: "Login failed" });
        } else {
          const jwtToken = createJWTToken(user.id);
          console.log("Login successful");
          res.send({
            message: "Login successful",
            user: user.username,
            jwtToken,
          });
        }
      } catch (err) {
        console.error("Error: couldn't verify password", err);
      }
    }
  });
});

export default router;
