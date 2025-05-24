import { z } from "zod";
//Declare schema for form input
export const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(18, { message: "Username must be at most 18 characters long" })
    .regex(/[a-zA-Z0-9]/, {
      message: "Username can only contain alphanumeric characters",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(25, { message: "Password must be at most 25 characters long" }),
});

//Delcare type based on the zod schema
export type formData = z.infer<typeof userSchema>;

//This is sort of the enum type for the different input fields
export type pathType =
  | "username"
  | "email"
  | "password"
  | "root"
  | `root.${string}`;


// This is the type of the error that will be returned from the server
export interface serverError {
  path: pathType;
  msg: string;
}
