import SendMessageForm from "../components/forms/sendMessageForm";
import GeneralChatHeader from "../layout/generalChatHeader";
import Messages from "../components/chat/messages";

function GeneralChatPage() {
  return (
    <main className="max-w-6xl px-4 mx-auto sm:px-8 md:px-12">
      <GeneralChatHeader />
      <Messages />
      <SendMessageForm />
    </main>
  );
}

export default GeneralChatPage;
