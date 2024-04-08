import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

export default function useSignup(url) {
  const navigate = useNavigate();

  //signup user
  const mutateSignup = useCallback(
    async (userData) => {
      console.log(userData);
      if (userData.userName.trim().length < 4) {
        throw new Error("Username must be min:4 characters in length");
      }
      if (!userData.email.includes("@") || !userData.email.includes(".com")) {
        throw new Error("Please enter a valid email");
      }
      if (userData.password.trim().length < 6) {
        throw new Error("Password must be min:6 characters in length");
      }
      if (userData.password.trim() !== userData.confirmPassword.trim()) {
        throw new Error("Passwords must match");
      }
      return await axios.post(url, userData);
    },
    [url],
  );

  const onSuccessSignup = async (response) => {
    if (response.status === 201) {
      const data = await response.data;
      toast.success(data.message, {
        position: "top-center",
      });
      return navigate("/login");
    }
  };

  const onErrorSignup = async (error) => {
    console.log(error.message);
    let message = await error?.response?.data?.error;
    if (!message) {
      message = error.message;
    }
    toast.error(message, {
      position: "top-right",
    });
  };

  return { mutateSignup, onSuccessSignup, onErrorSignup };
}
