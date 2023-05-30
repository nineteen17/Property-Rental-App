import { calculateCarValue } from './calculateCarValue'
import { CarValueInput, CarValueOutput } from '../types/types'
import { evaluateRisk } from './calculateRiskRating'
import { RiskInput, RiskOutput } from '../types/types'

export let calculateQuote = (
  car_value: CarValueInput,
  risk_rating: RiskInput
): CarValueOutput &
  RiskOutput & { yearly_premium?: number; monthly_premium?: number } => {
  let carValueResult = calculateCarValue(car_value)
  let riskRatingResult = evaluateRisk(risk_rating)

  if ('error' in carValueResult) {
    return { ...carValueResult, ...riskRatingResult }
  }

  if ('error' in riskRatingResult) {
    return { ...carValueResult, ...riskRatingResult }
  }

  if ('car_value' in carValueResult && 'risk_rating' in riskRatingResult) {
    let yearlyPremium =
      ((carValueResult.car_value as number) *
        (riskRatingResult.risk_rating as number)) /
      100
    let monthlyPremium = yearlyPremium / 12

    return {
      ...carValueResult,
      ...riskRatingResult,
      yearly_premium: yearlyPremium,
      monthly_premium: monthlyPremium,
    }
  }

  return {
    ...carValueResult,
    ...riskRatingResult,
  }
}
