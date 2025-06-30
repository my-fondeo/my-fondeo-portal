import {
  percentageByValueKey,
  type ChallengeValue,
} from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";

interface Props {
  challengeValue: ChallengeValue;
  setValue: (value: (prev: number) => number) => void;
  bgDark?: boolean;
  borderLeftPlain?: boolean;
  originalValue: ChallengeValue;
  originalAmount: number;
}

export const ChallengeItem = ({
  challengeValue,
  bgDark,
  borderLeftPlain,
  setValue,
  originalValue,
  originalAmount,
}: Props) => {
  const { key, type, value, editable, minValue, maxValue, unit } =
    challengeValue;

  const [hover, setHover] = useState(false);
  const [offset, setOffset] = useState(0);

  const enter = () => {
    if (!editable) return;
    setHover(true);
  };

  const formattedValue = Formatter.formatByType(value, type);

  useEffect(() => {
    if (value && unit) {
      const changePercentage = percentageByValueKey[key] || 0;
      const difference = value - originalValue.value;
      const charge = (difference / unit!) * changePercentage * originalAmount;
      setOffset(charge);
    }
  }, [value]);

  return (
    <div
      className={`flex items-center justify-between px-2 py-4 w-full z-100 relative- ${
        bgDark ? "bg-tertiary/75" : ""
      } ${borderLeftPlain ? "rounded-r-lg" : "rounded-lg"}`}
      onMouseEnter={enter}
      onMouseLeave={() => setHover(false)}
    >
      <button
        className={`cursor-pointer bg-primary rounded-full w-6 h-6 transition-opacity duration-200 disabled:bg-primary/20 disabled:cursor-default ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setValue((prev) => prev - unit!)}
        disabled={!editable || value <= (minValue || 0)}
      >
        -
      </button>
      <p className={type === "days" ? "text-md" : "text-lg"}>
        {formattedValue}
      </p>

      {offset != 0 && (
        <div className="flex items-center h-6">
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            className="fill-primary"
          >
            <path d="M14 0 Q-3 12 14 24" />
          </svg>
          <div className="bg-primary text-white px-1 h-full flex items-center rounded-r-sm">
            {Formatter.currencyWithSign(offset)}
          </div>
        </div>
      )}

      <button
        className={`cursor-pointer bg-primary rounded-full w-6 h-6 transition-opacity duration-200 disabled:bg-primary/20 disabled:cursor-default ${
          hover ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setValue((prev) => prev + unit!)}
        disabled={!editable || value >= (maxValue || 0)}
      >
        +
      </button>
    </div>
  );
};
