console.log('遍历')


const c = Symbol('s')

const father = {
  d: '原型链属性'
}

const object = Object.create(father)

// object.a = '自身属性'
Object.defineProperty(object, 'b', {
  value: '不可枚举',
  enumerable: false
})
object[c] = 'Symbol属性'


console.log('###### Object.keys ######')
console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))
console.log('######')

console.log('###### for...in ######')
for(const key in object) {
  console.log(key)
}
console.log('######')

console.log('###### Object.getOwnPropertyNames ######')
console.log(Object.getOwnPropertyNames(object))
console.log('######')

console.log('###### Object.prototype.hasOwnProperty ######')
// console.log(object.a, object.hasOwnProperty('a'))
console.log(object.b, object.hasOwnProperty('b'))
console.log(object[c], object.hasOwnProperty(c))
console.log(object.d, object.hasOwnProperty('d'))
console.log('######')

console.log('###### Object.assign ######')
const newObj = Object.assign({}, object)
// console.log(newObj.a)
console.log(newObj.b)
console.log(newObj[c])
console.log(newObj.d)
console.log('######')

console.log('###### JSON.stringify ######')
console.log(JSON.stringify(object))
console.log('######')

console.log('###### Reflect.ownKeys ######')
console.log(Reflect.ownKeys(object))
console.log('######')

console.log('###### Object.getOwnPropertySymbols ######')
console.log(Object.getOwnPropertySymbols(object))
console.log('######')

// const fatherArray = []
// fatherArray.father3 = 'abc'
// fatherArray.father1 = 'def'
// const array = Object.create(fatherArray)
// array[0] = 'a'
// array[1] = 'b'
// array[2] = 'c'
// array.f = 'f'
// array.g = 'g'
// array.b = 'b'
// console.log('for...in')
// for(const key in array) {
//   console.log(key)
// }
// console.log('###')
// console.log('for...of')
// for(const key of array) {
//   console.log(key)
// }
// console.log('###')

const obj = {}

obj['222'] = '2'
obj['111'] = '1'
obj['b'] = 'b'
obj['a'] = 'a'
console.log(Object.keys(obj))
