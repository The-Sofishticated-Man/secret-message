import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SendSecretMessage } from "../services/apiClients";

export default function useSendSecretMessage() {
  const { userId } = useParams();
  const mutation = useMutation({
    mutationFn: (msg: string) => SendSecretMessage(msg, userId!),
    onSuccess:()=>{
      console.log("Message sent successfully");
    }
    ,
    onError: (error: Error) => {
      console.error("Error sending message:", error);
    }
  });

  const submitMessage = (message: string) => mutation.mutate(message);

  return {
    submitMessage,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error as Error | null,
    reset: mutation.reset,
  };
}
