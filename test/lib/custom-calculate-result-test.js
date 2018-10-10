'use strict'

const test = require('ava')
const calculateScore = require('../../index')
const answers = require('./data/50-test-results.json')
const expectedResult = require('./data/custom-calculate-result-result.json')
const calculateResult = (score, count) => {
  const average = score / count
  let result = 'nøytral'
  if (average > 3) {
    result = 'høy'
  } else if (average < 3) {
    result = 'lav'
  }
  return result
}

const result = calculateScore({ answers: answers, calculateResult: calculateResult })

test('validates results from custom calculateResult', t => {
  t.deepEqual(result, expectedResult, 'So deep, so equal')
})
