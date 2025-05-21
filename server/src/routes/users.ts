import express from "express";
const router = express.Router();
import { validationResult } from "express-validator";
import SMUser from "../utils/mongoAPIUtils";
import { registerValidationSchema } from "../utils/validationUtils";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import logger from "../utils/loggingUtils";

function createJWTToken(_id: string) {
  //creates a jwt token that with the user's id as payload
  return jwt.sign({ _id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "7d",
  });
}

router.get("/:userID", (req, res) => {
  const userID = req.params.userID;
  logger.info(`got username fetch request with param of: ${userID}`);
  if (!userID) {
    // user not sent with payload
    logger.warn("userId is undefined/null");
    res.status(400).json({ error: "you sent a bad request dingus" });
  } else {
    SMUser.findById(userID)
      .select("username")
      .then((username) => {
        // user found and sent
        logger.info(`sending username: ${username}`);
        res.status(200).json(username);
      })
      .catch((err) => {
        // user not found
        logger.error("could not get username from database", err);
        res.status(404).json({ error: err });
      });
  }
});

router.post(
  "/register",
  registerValidationSchema,
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    logger.info("Validation result: ", errors);
    const formData = req.body;
    logger.info("User creation request: ", formData);

    //only adds user if there are no errors
    if (errors.length !== 0) {
      //if there are errors, send them back
      res.status(400).send(errors);
    } else {
      argon2
        .hash(formData.password)
        .then((hashedPassword) => {
          SMUser.create({ ...formData, password: hashedPassword })
            .then((data) => {
              // send user data to front end
              logger.info("created user successfully:");
              const jwtToken = createJWTToken(data.id);
              res.status(201).json({
                message: "User created successfully",
                user: data.username,
                jwtToken,
                id: data.id,
              });
            })
            .catch((err) => {
              //this triggers when the database fails to create the user
              logger.error("Error creating user", err);
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          //this triggers when argon fails to hash the password
          logger.error("Couldn't hash password", err);
          res.status(500).json({ error: err });
        });
    }
  }
);

router.post("/login", (req, res) => {
  const loginFields = req.body;
  logger.info("Login attempt: ", loginFields);
  SMUser.findOne({ email: loginFields.email }).then(async (user) => {
    if (user) {
      try {
        if (
          await argon2.verify(user.password as string, loginFields.password)
        ) {
          // password matches
          const jwtToken = createJWTToken(user.id);
          logger.info("Login successful");
          res.send({
            message: "Login successful",
            user: user.username,
            id: user.id,
            jwtToken,
          });
        } else {
          // password doesn't match
          logger.error("Login failed: password does not match");
          res.status(401).json({ message: "Login failed" });
        }
      } catch (err) {
        // argon failed to verify password
        logger.error("Error: couldn't verify password", err);
      }
    } else {
      // user not found in database
      logger.error("Login failed: user does not exist");
      res.status(401).json({ message: "Login failed" });
    }
  });
});

export default router;
