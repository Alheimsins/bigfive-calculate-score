const reduceFactors = require('./lib/reduce-factors')

module.exports = data => {
  if (!data) {
    throw new Error('Missing required input')
  }

  if (!data.answers) {
    throw new Error('Missing required input data.answers')
  }

  if (!Array.isArray(data.answers)) {
    throw new Error('Wrong format. Data.answers must be an array')
  }

  return reduceFactors({ answers: data.answers, calculateResult: data.calculateResult })
}
