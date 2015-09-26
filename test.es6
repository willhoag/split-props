import tape from 'tape'
import splitProps from './'

tape('should return the correct values', function (assert, done) {
  assert.deepEqual(splitProps({
    a: ['a', 'b', 'c'],
    b: [2, 3]
  }), [
    { a: 'a', b: 2 },
    { a: 'b', b: 3 },
    { a: 'c', b: undefined }
  ])
  assert.end()
})
