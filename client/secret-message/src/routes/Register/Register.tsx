import InputForm from "../../components/InputForm";
import style from "./Register.module.css";
const Register = () => {
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
        newUser={true}
      />
    </section>
  );
};

export default Register;
