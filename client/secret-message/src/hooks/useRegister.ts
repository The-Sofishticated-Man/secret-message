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
    .max(20, { message: "Password must be at most 20 characters long" }),
});

//Delcare type based on the zod schema
export type formData = z.infer<typeof userSchema>;

export interface serverError {
  path: "username" | "email" | "password" | "root" | `root.${string}`;
  msg: string;
}

export default { userSchema };
