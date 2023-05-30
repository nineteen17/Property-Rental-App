import { evaluateRisk } from "../../../services/calculateRiskRating";
import { TestRiskRating } from "../../../types/types";

const testCases: TestRiskRating[] = [
  {
    input: {
      claim_history:
        "I got into an accident where i smashed into a fence.", 
    },
    output: { risk_rating: 2 },
  },
  {
    input: { claim_history: "I've had no incidents in the past three years." }, 
    output: { risk_rating: 1 },
  },
  {
    input: { claim_history: "crash, crashed, scratch, bump, smash, accident, damage, collide" }, 
    output: { risk_rating: 5 }, 
  },
  {
    input: { claim_history: "CrAsH, sMasH" }, 
    output: { risk_rating: 2 },
  },
  {
    input: { claim_history: "" }, 
    output: { error: "there is an error in risk rating" },
  },
];

describe("calculateRiskRating", () => {
  testCases.map(({ input, output }) => {
    it(`should calculate the risk rating correctly for the test case : ${input.claim_history}`, () => {
      const result = evaluateRisk(input);
      expect(result).toEqual(output);
    });
  });
});
