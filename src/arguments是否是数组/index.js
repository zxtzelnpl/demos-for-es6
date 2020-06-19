function test() {
  console.log(arguments)
  console.log('typeof arguments:', typeof arguments)
  console.log('arguments instanceof Array:', arguments instanceof Array)
  console.log('arguments instanceof Object', arguments instanceof Object)
  console.log(Object.prototype.toString.call(arguments))
  let result
  // 1. Array.slice
  result = Array.prototype.slice.call(arguments)
  console.log('Array.prototype.slice.call(arguments)', Array.isArray(result))

  // 2. 由于arguments有Symbol.iterator属性
  result = Array.from(arguments)
  console.log('Array.from(arguments)', Array.isArray(result))

  // 3. Array.of, 感觉和slice一样的
  result = Array.of.apply(this, arguments)
  console.log('Array.of.apply(this, arguments)', Array.isArray(result))
}

test(1,2,3,4,5,6,7,8,9,'a')

Array.prototype.slice = (start, end) => {
  let O = ToObject(this)
  let A = new Array()
  let lenVal = O.length
  let len = ToUnit32(lenVal)
  let relativeStart = ToInteger(start)
  let k, final, relativeEnd
  if (relativeStart < 0) {
    k = max(len + relativeStart, 0)
  } else {
    k = min(relativeStart, len)
  }
  if (end === undefined) {
    relativeEnd = len
  } else {
    relativeEnd = ToInteger(end)
  }
  if (relativeEnd < 0) {
    final = max(len + relativeEnd, 0)
  } else {
    final = min(relativeEnd, len)
  }
  let n = 0
  while (k < final) {
    let Pk = ToString(k)
    let kPresent = O.hasOwnProperty(Pk)
    if (kPresent) {
      let kValue = O[Pk]
      Object.defineProperty(A, ToString(n), {
        value: kValue,
        writable: true,
        enumerable: true,
        configurable: true
      })
    }
    k++
    n++
  }
  return A
}
