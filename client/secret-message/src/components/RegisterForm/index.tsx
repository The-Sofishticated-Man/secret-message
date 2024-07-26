import style from "./RegisterForm.module.css";
import Button from "../Button";
import useRegister from "../../hooks/useRegister";
import { formData, userSchema } from "../../util/registrationValidationUtil";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BetterLink from "../BetterLink/BetterLink";

function RegisterForm() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(userSchema),
  });
  const { isLoading, registerIn } = useRegister(setError);

  return (
    <form
      noValidate={true}
      onSubmit={handleSubmit(registerIn)}
      className={style.loginForm}
    >
      <h1 className={style.formHeading}>Welcome!</h1>

      <p className={style.formSubHeading}>Register to create a new account</p>
      <div className={`form-floating   ${style.formField}`}>
        <input
          {...register("username")}
          type="text"
          id="usernameField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="usernameField">Username</label>
        {errors.username ? (
          <p className={"text-danger"}>{errors.username.message}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div className={`form-floating   ${style.formField}`}>
        <input
          {...register("email")}
          type="email"
          id="emailField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="emailField">Email address</label>
        {errors.email ? (
          <p className={"text-danger"}>{errors.email.message}</p>
        ) : (
          <p></p>
        )}
      </div>
      <div className={`form-floating   ${style.formField}`}>
        <input
          {...register("password")}
          type="password"
          id="passwordField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="passwordField">Password</label>
        {errors.password ? (
          <p className={"text-danger"}>{errors.password.message}</p>
        ) : (
          <p></p>
        )}
      </div>
      <Button
        btnType="btnPrimary"
        Size="1.3rem"
        Margin="10px 0px 0 0px"
        loading={isLoading}
      >
        Register
      </Button>
      <p className={style.loginLink}>
        Already have an account?{" "}
        <BetterLink to="/users/login" Color="var(--color-secondary)">Login</BetterLink>
      </p>
    </form>
  );
}

export default RegisterForm;
