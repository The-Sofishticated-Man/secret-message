import style from "./Login.module.css";
import LoginForm from "../../components/LoginForm";
const Register = () => {
  return (
    <section className={style.loginSection}>
      <LoginForm />
    </section>
  );
};

export default Register;
