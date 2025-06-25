import type { ChallengeValue } from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";

interface Props {
  challengeValue: ChallengeValue & {
    setValue: (value: (prev: number) => number) => void;
  };
  bgDark?: boolean;
  borderLeftPlain?: boolean;
}

export const ChallengeItem = ({ challengeValue, bgDark, borderLeftPlain }: Props) => {
  const { key, type, value, editable, minValue, maxValue, setValue } =
    challengeValue;

  const [hover, setHover] = useState(false);

  const enter = () => {
    if (!editable) return;
    setHover(true);
  };

  const formattedValue = Formatter.formatByType(value, type);

  return (
    <div
      className={`flex items-center justify-between p-4 w-full z-100 ${
        bgDark ? "bg-tertiary/75" : ""
      } ${ borderLeftPlain ? "rounded-r-lg" : "rounded-lg"}`}
      onMouseEnter={enter}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className={`cursor-pointer bg-primary rounded-full w-6 h-6 transition-opacity delay-100 duration-200 disabled:bg-primary/20 disabled:cursor-default ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setValue((prev) => prev - 1)}
        disabled={!editable || value <= (minValue || 0)}
      >
        -
      </button>
      <p className="text-lg">{formattedValue}</p>
      <button
        className={`cursor-pointer bg-primary rounded-full w-6 h-6 transition-opacity delay-100 duration-200 disabled:bg-primary/20 disabled:cursor-default ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setValue((prev) => prev + 1)}
        disabled={!editable || value >= (maxValue || 0)}
      >
        +
      </button>
    </div>
  );
};
