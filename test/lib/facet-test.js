'use strict'

const test = require('ava')
const calculateScore = require('../../index')
const facetData = require('./data/facet-test-data.json')
const facetExpected = require('./data/facet-test-result.json')
const facet = calculateScore({ answers: facetData })

test('validates results', t => {
  t.deepEqual(facetExpected, facet, 'returns expected result')
})
