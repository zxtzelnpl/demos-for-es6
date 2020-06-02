import {
  objectTag,
  setTag,
  mapTag
} from '../getAllTypes'

const toString = Object.prototype.toString
const isArray = Array.isArray

function isObject(value) {
  return value!==null && typeof value === 'object'
}

function isPureObject(value) {
  return toString.call(value) === objectTag
}

function isLength(length) {
  return typeof length === 'number' &&
  length > -1 && length % 1 == 0
}

function isArrayLike(value) {
  return isPureObject(value) && isLength(value.length)
}

function isMap (value) {
  return toString.call(value) === mapTag
}

function isSet (value) {
  return toString.call(value) === setTag
}

function getKeys(value) {
  if(isArray(value)) {
    const result = []
    const len = value.length
    let index = 0
    while(index < len) {
      result.push(value[index])
      index++
    }
    return result
  }

  return Object.keys(value).concat(Object.getOwnPropertySymbols(obj))
}

function deepClone(value) {

  // 如果既不是Array也不是Object
  if(!isArray(value)&&!isObject) {
    return value
  }

  let result
  // Array
  if(isArray(value)) {
    result = new Array(value.length)
    const keys = getKeys(value)
    keys.forEach(key => {
      const val = value[key]
      if(!isObject(val)) {
        result[key] = val
      } else {
        result[key] = deepClone(val)
      }
    })
  }

  // Set
  if(isSet(value)) {
    result = new Set()
    for(const val of value) {
      if(!isObject(val)) {
        result.add(val)
      } else {
        result.add(deepClone(val))
      }
    }
  }

  // Map
  if(isMap(value)) {
    result = new Map()
    for(const [_key, _val] of value) {
      const key = isObject(_key) ? deepClone(_key) : _key
      const val = isObject(_val) ? deepClone(_val) : _val
      result.set(key, val)
    }
  }
  
  // PureObject
  if(isPureObject(value)) {
    result = {}
    const keys = getKeys(value)
    keys.forEach(key => {
      const val = value[key]
      if(!isObject(val)) {
        result[key] = val
      } else {
        result[key] = deepClone(val)
      }
    })

    // 如果是ArrayLike
    if(isArrayLike(value)) {
      Object.defineProperty(result, 'length', {
        value: value.length,
        enumerable: false
      })
    }
  }

  return result
}