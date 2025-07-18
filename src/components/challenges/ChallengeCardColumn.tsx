import {
  percentageByValueKey,
  type ChallengeData,
  type ChallengeValue,
} from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";
import { ChallengeItem } from "./ChallengeItem";
import { useProLanding } from "@core/landing/store/challengeType";

interface EquationProps {
  values: ChallengeValue[];
  cost: number;
  initialValues: ChallengeValue[];
  discount: number;
}

const defaultEquation = ({
  values,
  cost,
  discount,
  initialValues,
}: EquationProps) => {
  if (useProLanding.getState().isEnabled) return cost;

  const profitTargetPhase1 =
    values.find((v) => v.key === "profitTargetPhase1")!.value -
    initialValues.find((v) => v.key === "profitTargetPhase1")!.value;
  const minPicks =
    values.find((v) => v.key === "minPicks")!.value -
    initialValues.find((v) => v.key === "minPicks")!.value;
  const maxTradeAmount =
    values.find((v) => v.key === "maxTradeAmount")!.value -
    initialValues.find((v) => v.key === "maxTradeAmount")!.value;
  const maxDailyLoss =
    values.find((v) => v.key === "maxDailyLoss")?.value || 0 -
    initialValues.find((v) => v.key === "maxDailyLoss")!.value;
  const maxTotalLoss =
    values.find((v) => v.key === "maxTotalLoss")!.value -
    initialValues.find((v) => v.key === "maxTotalLoss")!.value;
  const timeLimit =
    values.find((v) => v.key === "timeLimit")!.value -
    initialValues.find((v) => v.key === "timeLimit")!.value;
  const benefitDivision =
    values.find((v) => v.key === "benefitDivision")!.value -
    initialValues.find((v) => v.key === "benefitDivision")!.value;

  const changedValues: any = {};

  if (profitTargetPhase1) changedValues.profitTargetPhase1 = profitTargetPhase1;
  if (minPicks) changedValues.minPicks = minPicks;
  if (maxTradeAmount) changedValues.maxTradeAmount = maxTradeAmount;
  if (maxDailyLoss) changedValues.maxDailyLoss = maxDailyLoss;
  if (maxTotalLoss) changedValues.maxTotalLoss = maxTotalLoss;
  if (timeLimit) changedValues.timeLimit = timeLimit;
  if (benefitDivision) changedValues.benefitDivision = benefitDivision;

  let charge = 0;

  Object.keys(changedValues).forEach((key) => {
    const difference = changedValues[key];
    const valueFind = values.find((v) => v.key === key);
    const unit = valueFind?.unit;
    const changePercentage = percentageByValueKey[key] || 0;
    charge +=
      (difference / (unit || 1)) * changePercentage * ((cost || 0) - discount);
  });

  return cost - discount + charge;
};

interface Props {
  totalAmount: number; // MONTO A FONDEAR
  initialValues: ChallengeValue[];
  cost: number;
  discount: number;
  equation?: (value: EquationProps) => number;
}

export default function ChallengeCard({
  totalAmount, // FONDEO
  initialValues,
  discount = 0,
  cost,
  equation = defaultEquation,
}: Props) {
  const { isEnabled } = useProLanding();
  equation = isEnabled ? () => cost : equation;

  const [values, setValues] = useState<ChallengeValue[]>(
    initialValues.map((v) => ({ ...v }))
  );

  const [calculatedTotal, setCalculatedTotal] = useState<number>(() =>
    equation({
      initialValues,
      cost,
      values,
      discount,
    })
  );

  useEffect(() => {
    setValues(initialValues.map((v) => ({ ...v })));
  }, [initialValues]);

  useEffect(() => {
    setCalculatedTotal(equation({ initialValues, cost, values, discount }));
  }, [values, equation]);

  return (
    <div
      className={`${
        isEnabled ? "bg-yellow-300/50" : "bg-tertiary/40"
      } transition-colors border border-primary rounded-3xl mb-15 mr-4`}
    >
      <div className="flex flex-col items-center">
        <div className="h-20 text-center">
          <h1 className="text-2xl font-bold pt-2">
            {Formatter.thousandCurrency(totalAmount)}{" "}
          </h1>
          <span className="text-md mb-2">Capital virtual</span>
        </div>

        {values.map((value, i) => (
          <ChallengeItem
            borderLeftPlain={totalAmount == 2000}
            challengeValue={value}
            setValue={(value) => {
              setValues((prev) => {
                const newValues = [...prev];
                newValues[i].value = value(prev[i].value);
                setCalculatedTotal(
                  equation({
                    initialValues,
                    cost,
                    values,
                    discount,
                  })
                );
                return newValues;
              });
            }}
            key={i}
            bgDark={i % 2 == 0}
            originalValue={initialValues[i]}
            originalAmount={cost - discount}
            disableDecreaseCost={
              equation({
                initialValues,
                cost,
                values,
                discount,
              }) <=
              (cost - discount) * 0.75
            }
          />
        ))}

        <div className="p-5">
          <span className="text-lg mr-2">
            {Formatter.currency(calculatedTotal - discount)}
          </span>
          <span className="text-sm line-through">
            {Formatter.currency(calculatedTotal)}
          </span>
        </div>

        <button
          className={`btn transition-colors  bg-primary border-none font-semibold text-sm my-[-1rem]`}
        >
          Empezar ahora
        </button>
      </div>
    </div>
  );
}
