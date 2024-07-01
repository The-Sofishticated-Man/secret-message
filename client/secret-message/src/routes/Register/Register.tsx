import InputForm from "../../components/InputForm";
import style from "./Register.module.css";
const Register = () => {
  return (
    <section className={style.formSection}>
      <InputForm
        onSubmit={(formData) => {
          console.log(formData);
        }}
        newUser={true}
      />
    </section>
  );
};

export default Register;
