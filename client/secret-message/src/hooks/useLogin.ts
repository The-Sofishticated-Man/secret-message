import { FormEvent, useState } from "react";
import { loginUser } from "../services/apiClients";
import { SetUser } from "../util/loginUtil";
export default function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  async function submitForm(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    loginUser(loginData)
      .then((response) => {
        console.log("login successful: ", response);
        //stores username and jwt token in the cookie jar
        SetUser(response.data.user,response.data.jwtToken)      
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            setError("Email or password is incorrect");
          }
        } else {
          setError("There has been an error, please try again later");
        }
      })
      .finally(() => setLoading(false));
  }
  return { isLoading, error, submitForm, loginData, setLoginData };
}
