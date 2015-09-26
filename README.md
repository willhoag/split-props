# split-props

Creates an array of objects reducing property values by index successively

[![Build Status](https://travis-ci.org/willhoag/split-props.svg)](https://travis-ci.org/willhoag/split-props)
[![npm version](https://badge.fury.io/js/split-props.svg)](http://badge.fury.io/js/split-props)

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install split-props --save
```

## Description
Loops through the object multiple times (returning an array of objects) mapping the next value from each property to the property's key.

## Usage

```js
// require module
var splitProps = require('split-props');

splitProps({
  a: ['a', 'b', 'c'],
  b: [2, 3]
})

/* returns [
  { a: 'a', b: 2 },
  { a: 'b', b: 3 },
  { a: 'c', b: undefined }
] */

```


## License

MIT
