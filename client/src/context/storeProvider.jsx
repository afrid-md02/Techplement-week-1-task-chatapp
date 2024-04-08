import { useReducer } from "react";
import Store from "./store";

const initialState = {
  token: null,
  isLoggedin: false,
  user: null,
  messages: [],
};

function reducer(state, action) {
  if (action.type === "initial-values") {
    return {
      token: action.token,
      isLoggedin: action.isLoggedin,
      user: action.user,
      messages: state.messages,
    };
  }
  if (action.type === "login") {
    return {
      token: action.token,
      isLoggedin: action.isLoggedin,
      user: action.user,
      messages: state.messages,
    };
  }
  if (action.type === "logout") {
    return {
      token: action.token,
      isLoggedin: action.isLoggedin,
      user: action.user,
      messages: state.messages,
    };
  }
  if (action.type === "set-messages") {
    return {
      token: state.token,
      isLoggedin: state.isLoggedin,
      user: state.user,
      messages: action.messages,
    };
  }
  if (action.type === "push-newMessage") {
    const newMesssage = action.newMessage;
    const newArray = [...state.messages, newMesssage];
    const set = new Set(newArray);
    const arr = [...set];
    return {
      token: state.token,
      isLoggedin: state.isLoggedin,
      user: state.user,
      messages: arr,
    };
  }
  throw Error("Unknown action.");
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginHandler = (loginToken, user) =>
    dispatch({
      type: "login",
      token: loginToken,
      isLoggedin: true,
      user: user,
    });

  const logoutHandler = () =>
    dispatch({ type: "logout", token: null, isLoggedin: false, user: null });

  const initialValuesHandler = (token, isLoggedin, user) =>
    dispatch({
      type: "initial-values",
      token: token,
      isLoggedin: isLoggedin,
      user: user,
    });

  const setMessagesHandler = (messages) =>
    dispatch({ type: "set-messages", messages: messages });

  const pushNewMessageHandler = (newMessage) =>
    dispatch({ type: "push-newMessage", newMessage: newMessage });

  const context = {
    token: state.token,
    isLoggedin: state.isLoggedin,
    user: state.user,
    messages: state.messages,
    login: loginHandler,
    logout: logoutHandler,
    initialValues: initialValuesHandler,
    setMessages: setMessagesHandler,
    pushNewMessage: pushNewMessageHandler,
  };

  return <Store.Provider value={context}>{children}</Store.Provider>;
}
export default StoreProvider;
