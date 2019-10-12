'use strict'

const test = require('ava')
const calculateScore = require('../../index')
const answers = require('./data/50-test-results.json')

const score = calculateScore({ answers: answers })

test('validates results', t => {
  t.deepEqual(score.E.score, 31, 'It calculates 31 for E')

  t.deepEqual(score.E.result, 'high', 'It calculates high result for E')

  t.deepEqual(score.A.score, 30, 'It calculates 30 for A')

  t.deepEqual(score.A.result, 'neutral', 'It calculates neutral result for A')

  t.deepEqual(score.C.score, 31, 'It calculates 31 for C')

  t.deepEqual(score.C.result, 'high', 'It calculates high result for C')

  t.deepEqual(score.N.score, 21, 'It calculates 21 for N')

  t.deepEqual(score.N.result, 'low', 'It calculates low result for N')

  t.deepEqual(score.O.score, 33, 'It calculates 33 for O')

  t.deepEqual(score.O.result, 'high', 'It calculates high result for O')
})
