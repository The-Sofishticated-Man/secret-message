import { useState } from "react";
import Registerform from "../../components/RegisterForm";
import style from "./Register.module.css";
const Register = () => {
  const [successful, setSuccessful] = useState(false);
  return (
    <section className={style.formSection}>
      {successful ? (
        <Registerform onComplete={() => setSuccessful(true)} />
      ) : (
        <h1>Registeration successful, please head back to login page.</h1>
      )}
    </section>
  );
};

export default Register;
