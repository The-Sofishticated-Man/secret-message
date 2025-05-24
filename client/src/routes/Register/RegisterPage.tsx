import style from "./Register.module.css";
import RegisterForm from "../../components/RegisterForm";
const Register = () => {
  return (
    <section className={style.registerSection}>
      <RegisterForm />
    </section>
  );
};

export default Register;
