import style from "./LoginForm.module.css";
import Button from "../Button";
import useLogin from "../../hooks/useLogin";
import BetterLink from "../BetterLink/BetterLink";

function LoginForm() {
  const { isLoading, error, submitForm, loginData, setLoginData } = useLogin();
  return (
    <form
      noValidate={true}
      onSubmit={(e) => submitForm(e)}
      className={style.loginForm}
    >
      <h1 className={style.formHeading}>Welcome Back!</h1>
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          onChange={(event) =>
            setLoginData({ ...loginData, email: event.target.value })
          }
          name="email"
          type="email"
          id="emailField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="emailField">Email address</label>
      </div>
      <div className={`form-floating mb-3  ${style.formField}`}>
        <input
          onChange={(event) =>
            setLoginData({ ...loginData, password: event.target.value })
          }
          name="password"
          type="password"
          id="passwordField"
          className="form-control"
          placeholder=""
        />
        <label htmlFor="passwordField">Password</label>
        {error && <p className={"text-danger"}>{error}</p>}
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
      <Button Size="1.3rem" Margin="10px 0px 0 0px" loading={isLoading}>
        Log in
      </Button>
      <p className={style.registerLink}>
        Don't have an account?{" "}
        <BetterLink to="/register" Color="var(--color-secondary )">
          Register
        </BetterLink>
      </p>
    </form>
  );
}

export default LoginForm;
