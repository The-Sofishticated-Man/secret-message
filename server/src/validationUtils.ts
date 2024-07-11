import { body } from "express-validator";
import SMUser from "./mongoAPI";

async function usernameInUse(value: string) {
  const user = await SMUser.findOne({ username: value });
  console.log("found user with same username: ", user);
  //checks if the object is empty
  if (user) {
    throw new Error("Username already in use");
  }
}
async function emailInUse(value: string) {
  const user = await SMUser.findOne({ email: value });
  console.log("found user with same email: ", user);
  if (user) {
    throw new Error("Email already in use");
  }
}
export const registerValidationSchema = [
  body("username")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Username cannot be empty")
    .matches(/[a-zA-Z0-9]/)
    .withMessage("Username must only include alphanumeric characters")
    .isLength({ min: 3, max: 18 })
    .withMessage("Username must be 3-18 characters long")
    //checks if username is already in use
    .custom((username) => usernameInUse(username)),
  body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Email not valid")
    //checks if email is in use
    .custom((email) => emailInUse(email)),
  body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8, max: 25 })
    .withMessage("Password must be 8-25 characters long"),
];
export default { registerValidationSchema };
