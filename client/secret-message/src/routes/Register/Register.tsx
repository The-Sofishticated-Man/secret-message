import InputForm from "../../components/InputForm";
import style from "./Register.module.css";
import axios from "axios";
const Register = () => {
  return (
    <section className={style.formSection}>
      <InputForm
        onSubmit={(formData) => {
          axios
            .post("http://localhost:3000/register", formData)
            .then((response) => {
              console.log("hello");
              console.log(response.data);
            });
        }}
        newUser={true}
      />
    </section>
  );
};

export default Register;
