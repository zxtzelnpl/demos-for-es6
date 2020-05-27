// promise的then继续返回promise插入微任务，则会陷入死循环

let index = 10000
const makePromise = (val) => {
  console.log(val)
  while(index >=0 ) {
    index--
    return Promise.resolve(index).then(makePromise)
  }
}

setTimeout(() => {
  console.log('setTimeout1')
  new Promise(function(resolve) {
    resolve('promise4')
  }).then(makePromise)
})

setTimeout(() => {
  console.log('setTimeout2')
})
