import style from "./InputForm.module.css";
import Button from "../Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

//Declare schema for form input
const userSchema = z.object({
  username: z.string().min(3).max(18),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

//Delcare type based on the zod schema
type formData = z.infer<typeof userSchema>;

function InputForm({
  onSubmit,
  newUser,
}: {
  onSubmit: SubmitHandler<formData>;
  newUser: boolean;
}) {
  //using react hook form to
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(userSchema),
  });
  console.log(errors);
  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit(onSubmit)}
      className={style.loginForm}
    >
      <h1 className={style.formHeading}>
        {newUser ? "Welcome!" : "Welcome Back!"}
      </h1>
      {newUser && (
        <>
          <p className={style.formSubHeading}>
            Register to create an new account
          </p>
          <div className={`form-floating mb-3  ${style.formField}`}>
            <input
              {...register("username")}
              type="text"
              id="usernameField"
              className="form-control"
              placeholder=""
            />
            <label htmlFor="usernameField">Username</label>
            {errors.username ? 
              <p className={style.warningMessage}>{errors.username.message}</p>:<p></p>
            }
          </div>
        </>
      )}
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          {...register("email")}
          type="email"
          id="emailField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="emailField">Email address</label>
      </div>
      {errors.email ? 
       <p className={style.warningMessage}>{errors.email.message}</p>:<p></p>
      }
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          {...register("password")}
          type="password"
          id="passwordField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="passwordField">Password</label>
      </div>
      {errors.password ? 
        <p className={style.warningMessage}>{errors.password.message}</p>:<p></p>
      }
      <div className={`form-check`}>
        <input
          type="checkbox"
          name="remember"
          id="remember"
          className={`form-check-input`}
        />
        <label htmlFor="remember" className={style.formCheckLabel}>
          Remember me
        </label>
      </div>
      <Button btnType="btnPrimary" Size="1rem" Margin="10px 0px 0 0px">
        Register
      </Button>
    </form>
  );
}

export default InputForm;
