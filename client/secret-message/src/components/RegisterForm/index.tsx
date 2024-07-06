import style from "./RegisterForm.module.css";
import Button from "../Button";
import { formData, serverError, userSchema } from "../../hooks/useRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

function RegisterForm() {
  const {
    handleSubmit,
    register,
    setError,
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
      .catch(({ response: { data } }) => {
        console.log(data);
        data.forEach((error: serverError) => {
          setError(error.path, { type: error.path, message: error.msg });
        });
      });
  };
  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit(onSubmit) /*handleSubmit(onSubmit)*/}
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
