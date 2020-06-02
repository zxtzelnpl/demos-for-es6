const toString = Object.prototype.toString

/** `Object#toString` result references. */
export const numberTag = '[object Number]'
export const boolTag = '[object Boolean]'
export const argsTag = '[object Arguments]'
export const arrayTag = '[object Array]'
export const dateTag = '[object Date]'
export const errorTag = '[object Error]'
export const mapTag = '[object Map]'
export const objectTag = '[object Object]'
export const regexpTag = '[object RegExp]'
export const setTag = '[object Set]'
export const stringTag = '[object String]'
export const symbolTag = '[object Symbol]'
export const weakMapTag = '[object WeakMap]'

export function getAllTypes(value) {
  const tag = toString.call(value)
  console.log(tag)
}