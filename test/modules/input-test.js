'use strict'

const test = require('ava')
const calculateScore = require('../../index')

test('throws if missing input', t => {
  const expectedErrorMessage = 'Missing required input'
  const error = t.throws(() => {
    calculateScore()
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('throws if not input.answers ', t => {
  const expectedErrorMessage = 'Missing required input data.answers'
  const error = t.throws(() => {
    calculateScore({ answers: false })
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})

test('throws if input.answers is wrong format', t => {
  const expectedErrorMessage = 'Wrong format. Data.answers must be an array'
  const error = t.throws(() => {
    calculateScore({ answers: 'wrong' })
  }, { instanceOf: Error })

  t.is(error.message, expectedErrorMessage)
})
