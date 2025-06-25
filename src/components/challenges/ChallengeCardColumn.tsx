import type { ChallengeData, ChallengeValue } from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";
import { ChallengeItem } from "./ChallengeItem";

const defaultEquation = (values: ChallengeValue[], totalAmount: number) => {
  const benefits1 = values.find((v) => v.key === "profitTargetPhase1");
  const benefits2 = values.find((v) => v.key === "profitTargetPhase2");

  if (!benefits1 || !benefits2) {
    console.error("No se envia toda la data en values: ", values);
    return 0;
  }

  return benefits1?.value + benefits2?.value + totalAmount || 0;
};
interface Props {
  totalAmount: number; // MONTO A FONDEAR
  initialValues: ChallengeValue[];
  discount?: number;
  equation?: (values: ChallengeValue[], totalAmount: number) => number;
}

export default function ChallengeCard({
  totalAmount, // FONDEO
  initialValues,
  discount = 0,
  equation = defaultEquation,
}: Props) {
  const [calculatedTotal, setCalculatedTotal] = useState<number>(() =>
    equation(initialValues, totalAmount)
  );

  const [values, setValues] = useState<ChallengeValue[]>(initialValues);

  useEffect(() => {
    setCalculatedTotal(equation(values, totalAmount));
  }, [values, equation]);
  return (
    <div className="bg-tertiary/40 border border-primary rounded-3xl mb-15 mr-4">
      <div className="flex flex-col items-center">
        <div className="h-20 text-center">
          <h1 className="text-2xl font-bold pt-2">
            {Formatter.thousandCurrency(totalAmount)}{" "}
          </h1>
          <span className="text-md mb-2">Capital virtual</span>
        </div>

        {initialValues.map((value, i) => (
          <ChallengeItem
            borderLeftPlain={totalAmount == 2000}
            challengeValue={{
              ...value,
              setValue: (value) => {
                setValues((prev) => {
                  const newValues = [...prev];
                  newValues[i].value = value(prev[i].value);
                  setCalculatedTotal(equation(newValues, totalAmount));
                  return newValues;
                });
              },
            }}
            key={i}
            bgDark={i % 2 == 0}
          />
        ))}

        <div className="p-5">
          <span className="text-lg mr-2">
            {Formatter.currency(calculatedTotal)}
          </span>
          <span className="text-sm line-through">
            {Formatter.currency(calculatedTotal + 15)}
          </span>
        </div>

        <button className="btn text-secondary bg-primary border-none font-semibold text-sm my-[-1rem]">
          Empezar ahora
        </button>
      </div>
    </div>
  );
}
