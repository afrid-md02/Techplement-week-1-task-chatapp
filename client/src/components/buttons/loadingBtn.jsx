import { RotateRight } from "@mui/icons-material";

function LoadingButton() {
  const wSize = window.innerWidth >= 768;
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="background_animations flex w-full items-center justify-center rounded-lg bg-primarydark px-2 py-2 text-center text-xs font-semibold tracking-wider text-primarycontent hover:scale-105 hover:bg-primarydark sm:py-3 sm:text-sm"
        disabled
      >
        <RotateRight
          className="animate-spin"
          sx={{ fontSize: wSize ? 22.5 : 17.5 }}
        />
      </button>
    </div>
  );
}

export default LoadingButton;
