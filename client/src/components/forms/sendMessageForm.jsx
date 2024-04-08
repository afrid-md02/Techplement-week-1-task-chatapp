import { Send } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import useSendMessage from "../../hooks/useSendMessage";
import serverURL from "../../utilities/server_url";
import Store from "../../context/store";

function SendMessageForm() {
  const store = useContext(Store);
  const { mutateSendMessage, onSuccessSendMessage, onErrorSendMessage } =
    useSendMessage(`${serverURL}/messages/send-message`);

  const { mutate } = useMutation({
    mutationFn: mutateSendMessage,
    onSuccess: onSuccessSendMessage,
    onError: onErrorSendMessage,
  });

  const messageRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const message = messageRef.current.value;
    if (!store.isLoggedin) {
      return toast.error("Please login first", {
        position: "top-right",
      });
    }
    mutate(message);
    messageRef.current.value = "";
  };
  return (
    <form
      onSubmit={submitHandler}
      className="fixed bottom-0 left-0 right-0 z-10 flex items-center px-2 py-3 space-x-2 font-medium bg-foreground font-Raleway md:px-12 md:py-6"
    >
      <input
        ref={messageRef}
        placeholder="Type your message here..."
        type="text"
        className="w-full h-8 px-3 text-sm tracking-wider border-2 rounded-full outline-none border-border bg-background text-copy focus-within:bg-themebtnbg"
      />
      <button
        type="submit"
        className="flex items-center justify-center rounded-lg bg-primary p-1.5"
      >
        <Send fontSize="small" className="text-primarycontent" />
      </button>
    </form>
  );
}

export default SendMessageForm;
