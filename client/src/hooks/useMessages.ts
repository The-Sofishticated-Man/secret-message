import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSecretMessages,
  deleteMessage,
} from "../services/privateApiClients";
import useAxiosPrivate from "./useAxiosPrivate";

export function useMessages() {
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();

  const {
    data: messages = [],
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const res = await getSecretMessages(axiosPrivate);
      if (!res || !res.data || !res.data.secretMessages) {
        throw new Error("Failed to fetch messages");
      }
      return res.data.secretMessages;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteMessage(id, axiosPrivate),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    },
  });

  return {
    messages,
    isPending,
    isError,
    error,
    refetch,
    deleteMessage: (id: string) => deleteMutation.mutate(id),
  };
}
