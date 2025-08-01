import { useState } from "react";
import { EyeOutline as Eye, EyeOffOutline as EyeOff } from "react-ionicons";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  passInput?: boolean;
  className?: string;
}

export const Input = ({
  error,
  label,
  passInput = false,
  className,
  ...props
}: Props) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <label className={`flex flex-col gap-0.5 text-secondary ${className}`}>
      <span className="text-sm sm:text-base">{label}</span>
      <div className="relative w-full">
        <input
          type={passInput && !showPassword ? "password" : "text"}
          className="bg-quaternary p-2.5 sm:p-3 text-primary-text placeholder-primary-text/50 outline-0 w-full rounded-xl text-sm sm:text-base"
          {...props}
        />
        {passInput &&
          (showPassword ? (
            <Eye
              onClick={() => setshowPassword(!showPassword)}
              width="20px"
              className="sm:w-[25px] absolute right-2.5 sm:right-3 top-[15%] sm:top-[20%] cursor-pointer"
              color="white"
            />
          ) : (
            <EyeOff
              onClick={() => setshowPassword(!showPassword)}
              width="20px"
              className="sm:w-[25px] absolute right-2.5 sm:right-3 top-[15%] sm:top-[20%] cursor-pointer"
              color="white"
            />
          ))}
      </div>
      <span className="text-red-500 h-4 max-h-4 max-w-full text-xs sm:text-sm">
        {error ?? ""}
      </span>
    </label>
  );
};
