import type { ChallengeData, ChallengeValue } from "@interfaces/ChallengeValue";
import { Formatter } from "@util/formatter";
import { useEffect, useState } from "react";
import { ChallengeItem } from "./ChallengeItem";

interface Props {
  totalAmount: number;
  values: ChallengeValue[];
  discount?: number;
  equation?: (values: ChallengeValue[]) => number;
}

export default function ChallengeCard({
  totalAmount,
  values,
  discount = 0,
  equation = (_) => 20000,
}: Props) {

  const [calculatedTotal, setCalculatedTotal] = useState<number>(() =>
    equation(values)
  );

  return (
    <div className="bg-tertiary w-50 h-50 border border-primary rounded-3xl">
      <div className="flex flex-col items-center">
        <h1>{Formatter.thousandCurrency(totalAmount)}</h1>
        
        { values.map( value => (
          <ChallengeItem
            {...value}
          />
        ))  }
      </div>
    </div>
  );
}
