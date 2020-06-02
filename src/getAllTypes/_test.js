import { getAllTypes } from './index'

const log = console.log

getAllTypes(1)
getAllTypes('a')
getAllTypes(true)
getAllTypes({})
getAllTypes([])
getAllTypes(/abc/gu)
log(typeof /abc/gu)
getAllTypes(Symbol.for('abc'))
log(typeof Symbol.for('abc'))
getAllTypes(new Date())
getAllTypes(new Error())
getAllTypes(new Set())
log(typeof new Set())
getAllTypes(new WeakSet())
getAllTypes(new Map())
getAllTypes(new WeakMap())

function a(){
  getAllTypes(arguments)
  log(Array.isArray(arguments))
  log(arguments.length)
  log(arguments)
}
a(1,undefined,2)


const A = []
A[9] =1 
log(A.length)
log(A)
for(const key of A) {
  log(key)
}

const obj = {}
const ab = Symbol.for('a')
const b = Symbol.for('b')
obj[ab] = 'aaa'
obj[b] = 'ccc'

console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))
function abc () {
  console.log(Reflect.ownKeys(arguments))
}

abc(1,2,3,4)