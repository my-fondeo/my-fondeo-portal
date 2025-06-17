export interface ChallengeValueVariable {
  profitTargetPhase1: number
  profitTargetPhase2: number
  minPicks: number
  maxTradeAmount: number
  minTradeAmount: number
  maxTotalLoss: number
  timeLimit: number
  profitSplit: number
  benefitDivision: number
  fee: number
}

export interface ChallengeValueVariableRegular
  extends ChallengeValueVariable {
    maxDailyLoss: number
}

export interface ChallengeValueVariablePro
  extends ChallengeValueVariable {
    dailyProfitLimit: number
}

export type ChallengeData = ChallengeValueVariableRegular & ChallengeValueVariablePro;

export type formatType = "amount" | "percentage" | "days";

export interface ChallengeValue {
  type: formatType;
  key: keyof ChallengeData;
  value: number;
  editable?: boolean;
  minValue?: number;
  maxValue?: number;
  label?: string;
}

export interface ChallengeTableColumnData {
  values: ChallengeValue[];
}


