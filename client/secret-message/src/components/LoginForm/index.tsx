import style from "./LoginForm.module.css";
import Button from "../Button";
import { FormEvent, useState } from "react";
import { loginUser } from "../../services/apiClients";

function RegisterForm() {
  
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  async function submitForm(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    loginUser(loginData)
      .then((data) => {
        setError("Sign in successful");
        console.log("login successful: ", data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setError("Email or password is incorrect");
          }
        } else {
          setError("There has been an error, please try again later");
        }
      })
      .finally(() => setLoading(false));
  }

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
        {error && <p className={style.warningMessage}>{error}</p>}
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
