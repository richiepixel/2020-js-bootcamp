//const { suma } = require('../calc')
import { suma, diff } from '../calc'
import sumTestCases from './calc.sum.testcases.json'
import diffTestCases from './calc.diff.testcases.json'

test('3 + 6 should be 9',  () => {
  expect(suma(3,6)).toBe(9)
})

test('3 + 6 should not be 6', () => {
  expect(suma(3, 6)).not.toBe(6)
})

test('3 - 6 should be -3', () =>{
  expect(diff(3,6)).toBe(-3)
})

for (let i = 0; i < sumTestCases.length; i++) {
  test(`${sumTestCases[i].number1} + ${sumTestCases[i].number2} should be ${sumTestCases[i].expect}`, () => {
    expect(
      suma(sumTestCases[i].number1, sumTestCases[i].number2))
      .toBe(sumTestCases[i].expect)
  })
}

for (let j = 0; j < diffTestCases.length; j++) {
  test(`${diffTestCases[j].number1} - ${diffTestCases[j].number2} should be ${diffTestCases[j].expect}`,() => {
    expect(diff(diffTestCases[j].number1, diffTestCases[j].number2))
    .toBe(diffTestCases[j].expect)
  })  
}
