import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/apiClients";
import {
  formData,
  pathType,
  serverError,
} from "../util/registrationValidationUtil";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export default function useRegister(
  setError: (
    path: pathType,
    { type, message }: { type: pathType; message: string }
  ) => void
) {
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formInput: formData) => registerUser(formInput),
    onSuccess: (response) => {
      dispatch({
        type: "LOGIN",
        payload: {
          accessToken: response.data.accessToken,
        },
      });
      navigate("/home", { replace: true });
    },
    onError: (error: any) => {
      if (error.response) {
        error.response.data.forEach(({ path, msg }: serverError) => {
          setError(path, { type: path, message: msg });
        });
      } else {
        setError("password", {
          type: "password",
          message: "Something went wrong, please try again later",
        });
      }
    },
  });

  return { isLoading: mutation.isPending, registerIn: mutation.mutate };
}
