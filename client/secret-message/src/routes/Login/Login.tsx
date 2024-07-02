import InputForm from "../../components/InputForm";
import style from "./Login.module.css";
const Login = () => {
  return (
    <section className={style.formSection}>
      <InputForm
        onSubmit={(formData) => {
          console.log(formData);
        }}
        newUser={false}
      />
    </section>
  );
};

export default Login;
