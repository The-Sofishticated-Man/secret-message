import { getUsername } from "../services/apiClients";
import { type LoaderFunctionArgs } from "react-router-dom";

const getUsernameFromID = async (args: LoaderFunctionArgs) => {
  const recipientId = args.params.userId as string;

  const username = (await getUsername(recipientId)).data.username;
  return { username, recipientId };
};

export default getUsernameFromID;
