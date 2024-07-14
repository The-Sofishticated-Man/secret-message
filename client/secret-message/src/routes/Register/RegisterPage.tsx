import RegisterForm from "../../components/RegisterForm";
import style from "./Register.module.css";
const Register = () => {
  return (
    <section className={style.registerSection}>
      <RegisterForm />
    </section>
  );
};

export default Register;
