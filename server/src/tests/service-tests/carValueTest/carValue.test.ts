import { calculateCarValue } from "../../../services/calculateCarValue";
import { TestCarValue } from "../../../types/types";

const testCases: TestCarValue[] = [
  {
    input: { model: "Civic", year: 2014 },
    output: { car_value: 6614 },
  },
  {
    input: { model: "BMW", year: 2020 },
    output: { car_value: 5820 },
  },
  {
    input: { model: "Tesla", year: 2018 },
    output: { car_value: 7718 },
  },
  {
    input: { model: "Camry", year: 0 },
    output: { error: "Missing model or year" },
  },
  {
    input: { model: "", year: 2015 },
    output: { error: "Missing model or year" },
  },
  {
    input: { model: "123", year: 2015 },
    output: { error: "Invalid model" },
  },
];

describe("calculateCarValue", () => {
  testCases.map(({ input, output }) => {
    it(`should calculate the car value correctly for ${input.model} and ${input.year}`, () => {
      const result = calculateCarValue(input);
      expect(result).toEqual(output);
    });
  });
});
