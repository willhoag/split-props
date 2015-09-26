import splitProps from './'

splitProps({
  a: ['a', 'b', 'c'],
  b: [2, 3]
})

/* returns [
  { a: 'a', b: 2 },
  { a: 'b', b: 3 },
  { a: 'c', b: undefined }
] */
