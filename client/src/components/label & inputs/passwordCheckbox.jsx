function PasswordCheckbox({ showPassword, setShowPassword }) {
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <span className="ml-1 flex w-full items-center space-x-2 text-xs font-medium text-copy">
      <input
        type="checkbox"
        className="accent-primary outline-none"
        id="checkbox"
        name="checkbox"
        onChange={showPasswordHandler}
      />
      <label htmlFor="checkbox">Show Password</label>
    </span>
  );
}

export default PasswordCheckbox;
