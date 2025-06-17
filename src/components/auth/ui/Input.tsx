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
      <span>{label}</span>
      <div className="relative w-full">
        <input
          type={passInput && !showPassword ? "password" : "text"}
          className="bg-quaternary p-3 text-primary-text placeholder-primary-text/50 outline-0 w-full"
          {...props}
        />
        {passInput &&
          (showPassword ? (
            <Eye
              onClick={() => setshowPassword(!showPassword)}
              width="25px"
              className="absolute right-3 top-[20%] cursor-pointer"
              color="white"
            />
          ) : (
            <EyeOff
              onClick={() => setshowPassword(!showPassword)}
              width="25px"
              className="absolute right-3 top-[20%] cursor-pointer"
              color="white"
            />
          ))}
      </div>
      <span>{error ?? ""}</span>
    </label>
  );
};
