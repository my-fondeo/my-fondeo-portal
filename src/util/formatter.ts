import type { formatType } from "@interfaces/ChallengeValue"


export class Formatter {

  static thousandCurrency = (n: number, symbol = "mil") => `$${Math.floor(n / 1000)}${symbol}`
  
  static currency = (n: number) => `$${n}`

  static formatByType = (n: number, type: formatType) => {
    if( type == "amount") return n;
    if( type == "days" ) return `${n} días`
    if( type == "percentage" ) return `${n}%`
  } 
}