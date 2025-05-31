import { FormEvent, useState } from "react";
import { loginUser } from "../services/apiClients";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
export default function useLogin() {
  
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();
  const navigate = useNavigate()

  async function submitForm(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    loginUser(loginData)
      .then((response) => {
        console.log("login successful: ");
        console.log("received access token: ", response.data.accessToken);
        dispatch({ type: "LOGIN", payload: { accessToken: response.data.accessToken } });
        navigate("/home", { replace: true }); // Redirect to home after login
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
