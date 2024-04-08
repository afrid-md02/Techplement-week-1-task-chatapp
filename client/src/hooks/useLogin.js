import { useCallback, useContext } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import Store from "../context/store";

export default function useLogin(url) {
  const navigate = useNavigate();
  const store = useContext(Store);

  //login user
  const mutateLogin = useCallback(
    async (userData) => {
      if (!userData.email.includes("@") || !userData.email.includes(".com")) {
        throw new Error("Please enter a valid email");
      }
      if (userData.password.trim().length < 6) {
        throw new Error("Password must be min:6 characters in length");
      }
      return await axios.post(url, userData);
    },
    [url],
  );

  const onSuccessLogin = async (response) => {
    if (response.status === 200) {
      const data = await response.data;
      await store.login(data.token, {
        userId: data.user._id,
        userName: data.user.userName,
        userEmail: data.user.email,
      });
      localStorage.setItem("jwt_token", data.token);
      localStorage.setItem("user_id", data.user._id);
      localStorage.setItem("user_name", data.user.userName);
      localStorage.setItem("user_email", data.user.email);
      toast.success(data.message, {
        position: "top-center",
      });
      return navigate("/", { replace: true });
    }
  };

  const onErrorLogin = async (error) => {
    let message = error?.response?.data?.error;
    if (!message) {
      message = error.message;
    }
    toast.error(message, {
      position: "top-right",
    });
  };

  return { mutateLogin, onSuccessLogin, onErrorLogin };
}
