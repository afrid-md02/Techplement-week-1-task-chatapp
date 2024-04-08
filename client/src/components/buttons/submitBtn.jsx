function SubmitButton({ children }) {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="flex w-full justify-center rounded-lg bg-primary px-2 py-2 text-center text-xs font-semibold tracking-wider text-primarycontent transition-all duration-500 active:scale-105 active:bg-primarydark sm:py-3 sm:text-sm md:hover:scale-105 md:hover:bg-primarydark"
      >
        {children}
      </button>
    </div>
  );
}

export default SubmitButton;
