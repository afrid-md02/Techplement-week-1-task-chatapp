import { useCallback, useContext } from "react";
import axios from "axios";
import { toast } from "sonner";

import Store from "../context/store";

export default function useSendMessage(url) {
  const store = useContext(Store);
  const token = store.token;

  //login user
  const mutateSendMessage = useCallback(
    async (message) => {
      if (message.trim().length < 1) {
        throw new Error("Enter something");
      }
      return await axios.post(
        url,
        { message },
        {
          headers: {
            Authorization: token,
          },
        },
      );
    },
    [url, token],
  );

  const onSuccessSendMessage = async (response) => {
    if (response.status === 201) {
      const data = await response.data;
      console.log(data.NewMessage);
      await store.pushNewMessage(data.NewMessage);
      toast.success(data.message, {
        position: "top-center",
      });
    }
  };

  const onErrorSendMessage = async (error) => {
    let message = error?.response?.data?.error;
    if (!message) {
      message = error.message;
    }
    toast.error(message, {
      position: "top-right",
    });
  };

  return { mutateSendMessage, onSuccessSendMessage, onErrorSendMessage };
}
