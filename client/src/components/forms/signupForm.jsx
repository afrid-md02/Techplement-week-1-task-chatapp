import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import serverURL from "../../utilities/server_url";

import FormHeading from "../headings/h2/formHeading";
import CommonInput from "../label & inputs/commonInput";
import PasswordInput from "../label & inputs/passwordInput";
import PasswordCheckbox from "../label & inputs/passwordCheckbox";
import LoadingButton from "../buttons/loadingBtn";
import SubmitButton from "../buttons/submitBtn";
import useSignup from "../../hooks/useSignup";

function SignupForm() {
  const { mutateSignup, onSuccessSignup, onErrorSignup } = useSignup(
    `${serverURL}/auth/signup`,
  );
  const { mutate, isPending } = useMutation({
    mutationFn: mutateSignup,
    onSuccess: onSuccessSignup,
    onError: onErrorSignup,
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
      <FormHeading>Create Account</FormHeading>
      <CommonInput
        content="User name"
        id="userName"
        name="userName"
        type="text"
        placeholder="User name"
        autoComplete="username"
      />
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
        autoComplete="new-password"
        showPassword={showPassword}
      />
      <PasswordInput
        content="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        showPassword={showPassword}
      />
      <PasswordCheckbox
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {isPending ? (
        <LoadingButton />
      ) : (
        <SubmitButton>Create account</SubmitButton>
      )}
    </form>
  );
}

export default SignupForm;
