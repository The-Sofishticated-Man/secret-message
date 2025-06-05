import { useState } from "react";
import { loginUser } from "../services/apiClients";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export default function useLogin() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: typeof loginData) => loginUser(data),
    onSuccess: (response) => {
      dispatch({
        type: "LOGIN",
        payload: { accessToken: response.data.accessToken },
      });
      navigate("/home", { replace: true });
    },
  });

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    mutation.mutate(loginData);
  }

  let error = "";
  if (mutation.isError) {
    const err = mutation.error as any;
    if (err?.response?.status === 401) {
      error = "Email or password is incorrect";
    } else {
      error = "There has been an error, please try again later";
    }
  }

  return {
    isLoading: mutation.isPending,
    error,
    submitForm,
    loginData,
    setLoginData,
  };
}
