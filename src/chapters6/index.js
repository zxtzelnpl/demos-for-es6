import { One } from './one.js'
import { Two } from './two.js'
import Three from './three.js'

if(0){
  console.log('###### 测试Symbol.isConcatSpreadable属性 ######')
  let collection = {
    0 : 'Hello',
    1 : 'world',
    length: 2,
    [Symbol.isConcatSpreadable]: true
  }

  let messages = ['Hi'].concat(collection)
  console.log(messages) // 0: "Hi" 1: "Hello" 2: "world"
}

if(0){
  // console.log(Symbol.keyFor('one'))
  // console.log(Symbol.keyFor('two'))
  // console.log(Symbol.keyFor('uid'))
  // console.log(Symbol.keyFor('uid2'))

  const uid = Symbol.for('one')
  console.log(One[uid])

  const uid2 = Symbol.for('two')
  console.log(Two[uid2])

  const uid3 = Symbol.for('three')

  console.log(Symbol.keyFor(uid))
  console.log(Symbol.keyFor(uid2))
  console.log(Symbol.keyFor(Three))
  console.log(Symbol.keyFor(uid3))
}