import style from "./RegisterForm.module.css";
import Button from "../Button";
import {
  formData,
  userSchema,
  serverError,
} from "../../util/registrationValidationUtil";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../services/apiClients";
import { useState } from "react";

function RegisterForm({ onComplete }: { onComplete: () => void }) {
  const [isLoading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (formInput: formData) => {
    setLoading(true);
    registerUser(formInput)
      .then((data) => {
        console.log("User added successfully", data);
        onComplete();
      })
      .catch(({ response: { data } }) => {
        //sets server error to their respective fields and logs them
        data.forEach(({ path, msg }: serverError) => {
          setError(path, { type: path, message: msg });
          console.log(`assigned ${path} an error of ${msg}`);
        });
      })
      .finally(() => setLoading(false));
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
      <Button
        btnType="btnPrimary"
        Size="1.3rem"
        Margin="10px 0px 0 0px"
        loading={isLoading}
      >
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;
