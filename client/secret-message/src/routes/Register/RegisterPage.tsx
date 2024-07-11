import { useState } from "react";
import Registerform from "../../components/RegisterForm";
import style from "./Register.module.css";
const Register = () => {
  const [successful, setSuccessful] = useState(false);
  return (
    <section className={style.registerSection}>
      {successful ? (
        <h1>Registeration successful, please head back to login page.</h1>
      ) : (
        <Registerform onComplete={() => setSuccessful(true)} />
      )}
    </section>
  );
};

export default Register;
