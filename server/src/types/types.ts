export interface CarValueInput {
  model: string
  year: number
}

export interface CarValueOutput {
  car_value?: number
  error?: string
}

export interface TestCarValue {
  input: { model: string; year: number }
  output: { car_value: number } | { error: string }
}

export type RiskInput = {
  claim_history: string
}

export type RiskOutput =
  | {
      risk_rating: number
    }
  | {
      error: string
    }

export interface TestRiskRating {
  input: RiskInput
  output: RiskOutput
}
