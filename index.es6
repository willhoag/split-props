import nth from 'ramda/src/nth'
import mapObj from 'ramda/src/mapObj'
import prop from 'ramda/src/prop'
import times from 'ramda/src/times'
import values from 'ramda/src/values'

export default function splitProps (obj) {
  let arrayLengths = values(obj).map(prop('length'))
  return times(function (i) {
    return mapObj(nth(i), obj)
  }, Math.max.apply(null, arrayLengths))
}
