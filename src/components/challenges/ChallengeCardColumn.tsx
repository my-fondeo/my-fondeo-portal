import type { ChallengeData, ChallengeValue } from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";
import { ChallengeItem } from "./ChallengeItem";

interface Props {
  totalAmount: number; // MONTO A FONDEAR
  initialValues: ChallengeValue[];
  discount?: number;
  equation?: (values: ChallengeValue[]) => number;
}

export default function ChallengeCard({
  totalAmount, // FONDEO
  initialValues,
  discount = 0,
  equation = (_) => 55,
}: Props) {
  const [calculatedTotal, setCalculatedTotal] = useState<number>(() =>
    equation(initialValues)
  );

  const [values, setValues] = useState<ChallengeValue[]>(initialValues);

  return (
    <div className="bg-tertiary/40 border border-primary rounded-3xl my-15">
      <div className="flex flex-col items-center">
        <div className="h-[64px] text-center">
          <h1 className="text-xl font-bold pt-2">
            {Formatter.thousandCurrency(totalAmount)}{" "}
          </h1>
          <span className="text-sm mb-2">Capital virtual</span>
        </div>

        {initialValues.map((value, i) => (
          <ChallengeItem
            challengeValue={{
              ...value,
              setValue: (value) => {
                setValues((prev) => {
                  const newValues = [...prev];
                  newValues[i].value = value(prev[i].value);
                  setCalculatedTotal(equation(newValues));
                  return newValues;
                });
              },
            }}
            key={i}
            bgDark={i % 2 == 0}
          />
        ))}

        <div className="p-5">
          <span className="text-lg mr-2">{Formatter.currency(calculatedTotal)}</span>
          <span className="text-sm line-through">
            {Formatter.currency(calculatedTotal + 15)}
          </span>
        </div>

        <button className="btn text-secondary bg-primary border-none font-semibold text-sm my-[-1rem]">Empezar ahora</button>
      </div>
    </div>
  );
}
