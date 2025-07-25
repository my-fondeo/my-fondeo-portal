import type { ChallengeValue } from "@interfaces/ChallengeValue";
import ChallengeCard from "./ChallengeCardColumn";
import ChallengeLabels from "./ChallengeLabels.tsx";
import { useProLanding } from "@core/landing/store/challengeType";

const defaultValues: ChallengeValue[] = [
  {
    key: "profitTargetPhase1",
    type: "percentage",
    value: 30,
    editable: true,
    minValue: 22.5,
    maxValue: 45,
    unit: 7.5,
  },
  {
    key: "profitTargetPhase2",
    type: "percentage",
    value: 25,
    editable: false,
  },
  {
    key: "minPicks",
    type: "amount",
    value: 20,
    editable: true,
    minValue: 15,
    maxValue: 30,
    unit: 5,
  },
  {
    key: "maxTradeAmount",
    type: "percentage",
    value: 10,
    editable: true,
    minValue: 10,
    maxValue: 15,
    unit: 2.5,
  },
  {
    key: "minTradeAmount",
    type: "percentage",
    value: 1,
    editable: false,
  },
  {
    key: "maxDailyLoss",
    type: "percentage",
    value: 10,
    editable: false,
    minValue: 7.5,
    maxValue: 15,
    unit: 2.5,
  },
  {
    key: "maxTotalLoss",
    type: "percentage",
    value: 10,
    editable: false,
    minValue: 10,
    maxValue: 25,
    unit: 5,
  },
  {
    key: "timeLimit",
    type: "days",
    value: 30,
    editable: true,
    minValue: 25,
    maxValue: 35,
    unit: 5,
  },
  {
    key: "benefitDivision",
    type: "percentage",
    value: 80,
    editable: true,
    minValue: 70,
    maxValue: 90,
    unit: 10,
  },
];

const defaultProValues: ChallengeValue[] = [
  {
    key: "profitTargetPhase1",
    type: "percentage",
    value: 45,
    editable: false,
  },
  {
    key: "profitTargetPhase2",
    type: "percentage",
    value: 30,
    editable: false,
  },
  {
    key: "minPicks",
    type: "amount",
    value: 30,
    editable: false,
  },
  {
    key: "maxTradeAmount",
    type: "percentage",
    value: 8,
    editable: false,
  },
  {
    key: "minTradeAmount",
    type: "percentage",
    value: 1,
    editable: false,
  },
  {
    key: "dailyProfitLimit",
    type: "percentage",
    value: 5,
    editable: false,
  },
  {
    key: "maxTotalLoss",
    type: "percentage",
    value: 15,
    editable: false,
  },
  {
    key: "timeLimit",
    type: "days",
    value: 25,
    editable: false,
  },
  {
    key: "benefitDivision",
    type: "percentage",
    value: 80,
    editable: false,
  },
];

const challenges = [
  {
    totalAmount: 2000,
    cost: 80,
    proCost: 80,
    discount: 15,
    proDiscount: 45,
  },
  {
    totalAmount: 5000,
    cost: 150,
    proCost: 150,
    discount: 35,
    proDiscount: 70,
  },
  {
    totalAmount: 10000,
    cost: 560,
    proCost: 560,
    discount: 61,
    proDiscount: 240,
  },
  {
    totalAmount: 20000,
    cost: 700,
    proCost: 700,
    discount: 71,
    proDiscount: 401,
  },
  {
    totalAmount: 50000,
    cost: 1250,
    proCost: 1250,
    discount: 101,
    proDiscount: 251,
  },
];

export const ChallengesTable = () => {
  const { isEnabled } = useProLanding();
  
  return (
    <div className="lg:w-[125%] justify-center grid lg:grid-cols-6 grid-cols-[40%_55%] mt-12">
      <ChallengeLabels />

      {challenges.map(
        ({ cost, discount, totalAmount, proCost, proDiscount }, index) => (
          <div
            key={totalAmount}
            className={index > 0 ? 'hidden lg:block' : ''}
          >
            <ChallengeCard
              totalAmount={totalAmount}
              initialValues={isEnabled ? defaultProValues : defaultValues}
              cost={isEnabled ? proCost : cost}
              discount={isEnabled ? proDiscount : discount}
            />
          </div>
        )
      )}
    </div>
  );
};
