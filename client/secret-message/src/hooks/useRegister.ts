import { useState } from "react";
import { registerUser } from "../services/apiClients";
import {
  formData,
  pathType,
  serverError,
} from "../util/registrationValidationUtil";

export default function useRegister(
  setError: (
    path: pathType,
    { type, message }: { type: pathType; message: string }
  ) => void
) {
  const [isLoading, setLoading] = useState(false);
  const onSubmit = (formInput: formData) => {
    console.log(formInput);
    setLoading(true);
    registerUser(formInput)
      .then((response) => {
        console.log("User added successfully", response.data);
      })
      .catch((error) => {
        //sets server error to their respective fields and logs them
        console.log("got an error trying to create user: ", error);
        error.response.data.forEach(({ path, msg }: serverError) => {
          setError(path, { type: path, message: msg });
          console.log(`assigned ${path} an error of ${msg}`);
        });
      })
      .finally(() => setLoading(false));
  };
  return { isLoading, onSubmit };
}
