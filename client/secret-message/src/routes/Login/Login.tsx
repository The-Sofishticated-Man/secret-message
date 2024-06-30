import InputForm from "../../components/InputForm";
import style from "./Login.module.css";
const Login = () => {
  return (
    <section className={style.formSection}>
      <InputForm
        onSubmit={(formData) => {
          try {
            console.log(formData);
          } catch (error) {
            console.log(error);
          }
        }}
        newUser={false}
      />
    </section>
  );
};

export default Login;
