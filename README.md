[![Build Status](https://travis-ci.com/Alheimsins/bigfive-calculate-score.svg?branch=master)](https://travis-ci.com/Alheimsins/bigfive-calculate-score)
[![Coverage Status](https://coveralls.io/repos/Alheimsins/bigfive-calculate-score/badge.svg?branch=master&service=github)](https://coveralls.io/github/Alheimsins/bigfive-calculate-score?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# bigfive-calculate-score

Calculate score for big five tests

## Installation

```
$ npm i @alheimsins/bigfive-calculate-score
```

## Usage

Pass an object with property **answers**.
Answers have to be an Array with domain and score. Facet is optional.

```JavaScript
const calculateScore = require('@alheimsins/bigfive-calculate-score')
const result = {
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ]
}

calculateScore(result)
```

returns score for each factor

```JavaScript
{
  'A': {
    'score': 6,
    'count': 2,
    'result': 'neutral',
    'facet': {
      '1': {
        'score': 6,
        'count': 2,
        'result': 'neutral'
      }
    }
  },
  'E': {
    'score': 6,
    'count': 2,
    'result': 'neutral',
    'facet': {
      '1': {
        'score': 3,
        'count': 1,
        'result': 'neutral'
      },
      '2': {
        'score': 3,
        'count': 1,
        'result': 'neutral'
      }
    }
  }
}
```

## Advanced

If you want to override **result** pass a function as the **calculateResult** property

The function signature must be

```JavaScript
function (score, count) {
  'use strict'
  // Do something
  return 'value'
}
```

Example

```JavaScript
const calculateScore = require('@alheimsins/bigfive-calculate-score')

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

const result = {
  "timeElapsed": -51,
  "ip": "127.0.0.1",
  "lang": "en",
  "test": "50-IPIP-NEO-PI-R",
  "totalQuestions": 50,
  "calculateResult": calculateResult,
  "answers": [
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "A",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "1",
      "score": "3"
    },
    {
      "domain": "E",
      "facet": "2",
      "score": "3"
    }
  ]
}

calculateScore(result)
```

Returns

```JavaScript
{
  'A': {
    'score': 6,
    'count': 2,
    'result': 'nøytral',
    'facet': {
      '1': {
        'score': 6,
        'count': 2,
        'result': 'nøytral'
      }
    }
  },
  'E': {
    'score': 6,
    'count': 2,
    'result': 'nøytral',
    'facet': {
      '1': {
        'score': 3,
        'count': 1,
        'result': 'nøytral'
      },
      '2': {
        'score': 3,
        'count': 1,
        'result': 'nøytral'
      }
    }
  }
}
```

## Related

- [bigfive-web](https://github.com/rubynor/bigfive-web) Website for five factor model of personality
- [b5-web](https://github.com/zrrrzzt/b5-web) Static website for big five tests

## License

[MIT](LICENSE)

## About

Created with <3 by [Alheimsins](https://github.com/Alheimsins)

![Alheimsins symbol](https://file-qwoleuymtm.now.sh "Alheimsins symbol")
