import style from "./.module.css";
import Button from "../Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

//Declare schema for form input
const userSchema = z.object({
  username: z.string().min(3).max(18),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

//Delcare type based on the zod schema
type formData = z.infer<typeof userSchema>;

function RegisterForm() {
  //using react hook form to control fields
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(userSchema),
  });
  
  const onSubmit = (formInput: formData) => {
    axios
      .post("http://localhost:3000/register", formInput)
      .then((response) => {
        console.log("Registeration successful:", response.data);
      })
      .catch((error) => {
        console.log("Registration failed: ", error);
      });
  };

  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit(onSubmit)}
      className={style.loginForm}
    >
      <h1 className={style.formHeading}>Welcome Back!</h1>

      <p className={style.formSubHeading}>Register to create an new account</p>
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          {...register("username")}
          type="text"
          id="usernameField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="usernameField">Username</label>
        {errors.username ? (
          <p className={style.warningMessage}>{errors.username.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          {...register("email")}
          type="email"
          id="emailField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="emailField">Email address</label>
        {errors.email ? (
          <p className={style.warningMessage}>{errors.email.message}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          {...register("password")}
          type="password"
          id="passwordField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="passwordField">Password</label>
        {errors.password ? (
          <p className={style.warningMessage}>{errors.password.message}</p>
        ) : (
          <p></p>
        )}
      </div>
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

export default RegisterForm;
