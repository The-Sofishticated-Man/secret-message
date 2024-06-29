import Button from "../../components/Button";
import style from "./RegisterAndLogin.module.css";
const RegisterAndLogin = ({ newUser }: { newUser: boolean }) => {
  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <section className={style.formSection}>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <h1 className={style.formHeading}>
          {newUser ? "Welcome!" : "Welcome Back!"}
        </h1>
        {newUser && (
          <>
            <p className={style.formSubHeading}>
              Register to create an new account
            </p>
            <div className={`form-floating mb-3 ${style.formField}`}>
              <input
                required={true}
                type="username"
                name="username"
                id="usernameField"
                className="form-control"
                placeholder=""
              />
              <label htmlFor="usernameField">Username</label>
            </div>
          </>
        )}
        <div className={`form-floating mb-3 ${style.formField}`}>
          <input
            required={true}
            type="email"
            name="email"
            id="emailField"
            className="form-control"
            placeholder=""
          />
          <label htmlFor="emailField">Email address</label>
        </div>
        <div className={`form-floating mb-3 ${style.formField}`}>
          <input
            required={true}
            type="password"
            name="password"
            id="passwordField"
            className="form-control"
            placeholder=""
          />
          <label htmlFor="passwordField">Password</label>
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
    </section>
  );
};

export default RegisterAndLogin;
