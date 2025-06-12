import type { ChallengeValue } from "@interfaces/ChallengeValue"
import { Formatter } from "@util/formatter"

export const ChallengeItem = ( { value, type }: ChallengeValue ) => {
  const formattedValue = Formatter.formatByType(value, type);

  return (
    <div>
      <p>{formattedValue}</p>
    </div>
  )
}