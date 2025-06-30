import type { formatType } from "@interfaces/ChallengeValue"


export class Formatter {

  static thousandCurrency = (n: number, symbol = "mil") => `$${Math.floor(n / 1000)}${symbol}`

  static currency = (n: number) => `$${Math.ceil(n * 100) / 100}`;
  static currencyWithSign = (n: number) => `${n >= 0 ? '+' : '-'}$${Math.abs(Math.ceil(n * 100) / 100)}`;



  static formatByType = (n: number, type: formatType) => {
    if (type == "amount") return Math.ceil(n * 100) / 100;
    if (type == "days") return `${n} días`
    if (type == "percentage") return `${n}%`
  }


}