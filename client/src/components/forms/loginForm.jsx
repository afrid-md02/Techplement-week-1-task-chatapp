import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import serverURL from "../../utilities/server_url";

import FormHeading from "../headings/h2/formHeading";
import CommonInput from "../label & inputs/commonInput";
import PasswordInput from "../label & inputs/passwordInput";
import PasswordCheckbox from "../label & inputs/passwordCheckbox";
import LoadingButton from "../buttons/loadingBtn";
import SubmitButton from "../buttons/submitBtn";
import useLogin from "../../hooks/useLogin";

function LoginForm() {
  const { mutateLogin, onSuccessLogin, onErrorLogin } = useLogin(
    `${serverURL}/auth/login`,
  );
  const { mutate, isPending } = useMutation({
    mutationFn: mutateLogin,
    onSuccess: onSuccessLogin,
    onError: onErrorLogin,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const userData = Object.fromEntries(fd.entries());
    mutate(userData);
  };

  return (
    <form
      className="w-full max-w-md px-4 py-8 space-y-4 rounded-md background_animations bg-foreground font-Raleway md:space-y-6 md:px-8 md:shadow-md"
      onSubmit={handleSubmit}
    >
      <FormHeading>Welcome back!</FormHeading>
      <CommonInput
        content="Email Address"
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        autoComplete="off"
      />
      <PasswordInput
        content="Password"
        id="password"
        name="password"
        placeholder="Password"
        autoComplete="current-password"
        showPassword={showPassword}
      />
      <PasswordCheckbox
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {isPending ? <LoadingButton /> : <SubmitButton>Login</SubmitButton>}
    </form>
  );
}

export default LoginForm;
