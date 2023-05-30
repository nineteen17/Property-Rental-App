import { calculateQuote } from '../../../services/calculateQuote';
import { CarValueInput, RiskInput } from '../../../types/types';

describe('calculateQuote', () => {
  it('calculates the correct quote given valid input', () => {
    const carValueInput: CarValueInput = { model: "Toyota", year: 2019 };
    const riskInput: RiskInput = { claim_history: "I crashed my car" };

    const result = calculateQuote(carValueInput, riskInput);

 
    const expectedCarValue = 5000; 
    const expectedRiskRating = 3; 
    const expectedYearlyPremium = (expectedCarValue * expectedRiskRating) / 100;
    const expectedMonthlyPremium = expectedYearlyPremium / 12;

    expect(result).toEqual({
      car_value: expectedCarValue,
      risk_rating: expectedRiskRating,
      yearlyPremium: expectedYearlyPremium,
      monthlyPremium: expectedMonthlyPremium
    });
  });

});
