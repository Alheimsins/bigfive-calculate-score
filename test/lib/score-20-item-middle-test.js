'use strict'

const test = require('ava')
const calculateScore = require('../../index')
const answers = ['E', 'A', 'C', 'N', 'O']
  .map(letter => Array.from({ length: 20 }, (v, i) => i).map(num => Object.assign({ domain: letter, score: 3 })))
  .reduce((a, b) => a.concat(b), [])

const score = calculateScore({ answers: answers })

test('validates results', t => {
  t.deepEqual(score.E.score, 60, 'It calculates 60 for E')

  t.deepEqual(score.A.score, 60, 'It calculates 60 for A')

  t.deepEqual(score.C.score, 60, 'It calculates 60 for C')

  t.deepEqual(score.N.score, 60, 'It calculates 60 for N')

  t.deepEqual(score.O.score, 60, 'It calculates 60 for O')
})
