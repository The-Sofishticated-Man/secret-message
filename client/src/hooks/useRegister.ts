import { useState } from "react";
import { registerUser } from "../services/apiClients";
import {
  formData,
  pathType,
  serverError,
} from "../util/registrationValidationUtil";
import Cookies from "js-cookie";
import useAuth from "./useAuth";
import { SetUser } from "../util/loginUtil";
Cookies.attributes;

export default function useRegister(
  setError: (
    path: pathType,
    { type, message }: { type: pathType; message: string }
  ) => void
) {
  const [isLoading, setLoading] = useState(false);
  const { authState, dispatch } = useAuth();
  const registerIn = (formInput: formData) => {
    console.log(formInput);
    setLoading(true);
    registerUser(formInput)
      .then((response) => {
        console.log("User added successfully", response.data);
        SetUser(response.data.user, response.data.jwtToken, response.data.id);
        dispatch({ type: "LOGIN", payload: response.data.user });
        console.log(authState);
        window.location.href = "../messages";
      })
      .catch((error) => {
        console.log("got an error trying to create user: ", error);
        if (error.response) {
          //sets server error to their respective fields and logs them
          error.response.data.forEach(({ path, msg }: serverError) => {
            setError(path, { type: path, message: msg });
            console.log(`assigned ${path} an error of ${msg}`);
          });
        } else {
          setError("password", {
            type: "password",
            message: "Something went wrong, please try again later",
          });
        }
      })
      .finally(() => setLoading(false));
  };
  return { isLoading, registerIn };
}
