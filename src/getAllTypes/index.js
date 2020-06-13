const toString = Object.prototype.toString

/** `Object#toString` result references. */
export const numberTag = '[object Number]'
export const boolTag = '[object Boolean]'
export const stringTag = '[object String]'
export const argsTag = '[object Arguments]'
export const arrayTag = '[object Array]'
export const dateTag = '[object Date]'
export const errorTag = '[object Error]'
export const objectTag = '[object Object]'
export const regexpTag = '[object RegExp]'
export const mapTag = '[object Map]'
export const setTag = '[object Set]'
export const weakSetTag = '[object WeakSet]'
export const weakMapTag = '[object WeakMap]'
export const symbolTag = '[object Symbol]'
export const arrayBufferTag = '[object ArrayBuffer]'
export const dataViewTag = '[object DataView]'
export const bolbTag = '[object Blob]'

export function getAllTypes(value) {
  const tag = toString.call(value)
  console.log(tag)
}