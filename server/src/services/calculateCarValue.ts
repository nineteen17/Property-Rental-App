import { CarValueInput, CarValueOutput } from '../types/types'

export function calculateCarValue(input: CarValueInput): CarValueOutput {
  const { model, year } = input

  if (!model || !year) {
    return { error: 'Missing model or year' }
  }

  if (!/^[a-zA-Z]+$/.test(model)) {
    return { error: 'Invalid model' }
  }

  const letters = model
    .toLowerCase()
    .split('')
    .filter((char) => /[a-z]/.test(char))
    .map((char) => char.charCodeAt(0) - 96)

  if (letters.length === 0) {
    return { error: 'Invalid model' }
  }

  const carValue = letters.reduce((sum, letter) => sum + letter, 0) * 100 + year

  return { car_value: carValue } //
}
