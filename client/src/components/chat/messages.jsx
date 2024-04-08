import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import serverURL from "../../utilities/server_url";
import Store from "../../context/store";
function Messages() {
  const store = useContext(Store);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-messages"],
    queryFn: async () => {
      const response = await axios.get(`${serverURL}/messages/all-messages`);
      const data = await response.data;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      store.setMessages(data.messages);
    }
  }, [data]);

  if (isLoading) {
    return (
      <p className="pt-12 text-sm font-medium text-center animate-pulse font-Raleway text-copy">
        Loading messages...
      </p>
    );
  }

  if (isError)
    return (
      <p className="pt-12 text-sm font-medium text-center text-red-600 animate-pulse font-Raleway">
        Failed to load messages...
      </p>
    );

  if (data.messages.length === 0)
    return (
      <p className="pt-12 text-sm font-medium text-center font-Raleway text-copy">
        Start chatting...
      </p>
    );

  return (
    <section className="h-[calc(100dvh-4.5rem)] overflow-y-auto pb-16 pt-4 md:pb-20">
      {store.isLoggedin
        ? store.messages.map((message) => {
            const startDate = new Date(message.createdAt.substring(0, 10));
            const endDate = new Date();
            const differenceMs = endDate.getTime() - startDate.getTime();
            const differenceDays = differenceMs / (1000 * 60 * 60 * 24);
            return (
              <div
                key={message._id}
                className={`flex py-2 ${
                  store.user.userId === message.senderId._id
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex w-1/2 flex-col rounded-xl px-4 py-1 ${store.user.userId === message.senderId._id ? "bg-primary" : "bg-foreground"}`}
                >
                  <p className="text-xs font-medium tracking-wide font-Raleway text-copylighter">
                    {message.senderId.userName}
                  </p>
                  <p
                    className={`font-Raleway text-sm font-medium tracking-wide ${store.user.userId === message.senderId._id ? "text-primarycontent" : "text-copy"}`}
                  >
                    {message.text}
                  </p>
                  <p className="font-serif text-xs font-medium text-end text-copylight">
                    {Math.floor(+differenceDays) <= 0
                      ? "Today"
                      : `${Math.floor(differenceDays)} days ago`}
                  </p>
                </div>
              </div>
            );
          })
        : store.messages.map((message) => {
            const startDate = new Date(message.createdAt.substring(0, 10));
            const endDate = new Date();
            const differenceMs = endDate.getTime() - startDate.getTime();
            const differenceDays = differenceMs / (1000 * 60 * 60 * 24);
            return (
              <div key={message._id} className="flex justify-start py-2">
                <div className="flex flex-col w-1/2 px-4 py-1 rounded-xl bg-foreground">
                  <p className="text-xs font-medium tracking-wide font-Raleway text-copylighter">
                    {message.senderId.userName}
                  </p>
                  <p className="text-sm font-medium tracking-wide font-Raleway text-copy">
                    {message.text}
                  </p>
                  <p className="font-serif text-xs font-medium text-end text-copylight">
                    {Math.floor(+differenceDays) <= 0
                      ? "Today"
                      : `${Math.floor(differenceDays)} days ago`}
                  </p>
                </div>
              </div>
            );
          })}
    </section>
  );
}

export default Messages;
