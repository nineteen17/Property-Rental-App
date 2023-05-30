import { RiskInput, RiskOutput } from '../types/types'

export const evaluateRisk = (input: RiskInput): RiskOutput => {
  const keywords: string[] = [
    'collide',
    'crash',
    'scratch',
    'bump',
    'smash',
    'accident',
    'damaged',
    'crashed',
  ]
  let risk_rating = 0

  if (!input.claim_history || input.claim_history.length === 0 || input.claim_history === '' || input.claim_history === ' ' ) { 
    return { error: 'there is an error in risk rating' }
  }

  keywords.forEach((keyword) => {
    let keywordMatches = input.claim_history.match(new RegExp(keyword, 'gi'))
    if (keywordMatches) {
      risk_rating += keywordMatches.length
    }
  })

  risk_rating = Math.min(Math.max(risk_rating, 1), 5)

  return { risk_rating }
}
