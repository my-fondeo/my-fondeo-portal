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
  unit?: number;
  editable?: boolean;
  minValue?: number;
  maxValue?: number;
  label?: string;
}

export interface ChallengeTableColumnData {
  values: ChallengeValue[];
}

// Estos son los porcentajes de AUMENTO de la tarifa por cada unidad (unit) que AUMENTA el usuario.
// Ejemplo: 
// UNIT de minPicks = 5, inicial = 20
// Percentage de minPicks = -6%
// 25 minPicks = -6% de la tarifa original
// 15 minPicks = +6% de la tarifa original
export const percentageByValueKey: Record<string, any> = {
  profitTargetPhase1: -.12,
  minPicks: -.12,
  maxTradeAmount: .12,
  maxDailyLoss: .3,
  maxTotalLoss: .3,
  timeLimit: .12,
  benefitDivision: .3,
}


