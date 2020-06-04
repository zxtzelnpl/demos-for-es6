const logE = e => console.log(e)

// 1 reject thenAble对象，resolve, 会被reject的， e为{}
// 2 resolve thenAble对象 reject, 会被rejct的，e为reject的值
if(0) {
  const thenAble1 = {
    then(resolve, reject) {
      resolve(1)
    }
  }
  
  const promise1 = Promise.reject(thenAble1)
  
  
  const promise3 = promise1.then(undefined, (e) => {console.log(`get e:${JSON.stringify(e)} from proise2`)})
  
  console.log(promise1)
  console.log(promise1 === promise3)
  
  
  const thenAble2 = {
    then(resolve, reject) {
      reject(1)
    }
  }
  
  const promise2 = Promise.resolve(thenAble2)
  
  const promise4 = promise2.then(undefined, (e) => {console.log(`get e:${e} from proise2`)})
  
  console.log(promise2)
  console.log(promise2 === promise4)
}

if(0) {
  // 3 resolve的如果是个promise,则直接resolve, 无论这个promise会被reject或者resolve
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 3000)
  })

  const promise6 = Promise.resolve(promise5)
  console.log(promise5 === promise6)
}

if(0) {
  // 4 reject promise(resolve) 则会不相等
  // reject promise(reject) 
  const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 3000)
  })

  const promise8 = Promise.reject(promise7)
  console.log(promise7 === promise8)
}


if(0) {
  // 4 reject promise(resolve) 则会不相等
  // reject promise(reject) 
  const promise7 = new Promise((resolve, reject) => {
    reject(1)
  })

  const promise8 = Promise.reject(promise7)
  console.log(promise7 === promise8)
}

if(0) {
  const promise9 = Promise.reject(1)
  const promise10 = promise9.then(undefined, logE).catch(logE)
}


console.log('script begin')

const timeout = 0

setTimeout(() => {
  console.log('setTimeout')
}, timeout)

process.nextTick(() => {
  console.log('nextTick')
})

setImmediate(() => {
  console.log('setImmediate')
}, timeout)

const promise2 = new Promise((resolve) => {
  resolve(2)
})

async function a() {
  console.log('begin async')
  const b = await promise2
  console.log('after await:' + b)
}

a()

const promise1 = new Promise((resolve, reject) => {
  console.log('resolve begin')
  resolve(1)
  console.log('resolve end')
})
promise1.then(()=> {
  console.log('then of promise1')
})

console.log('script end')

// index.js:78 script begin
// index.js:99 begin async
// index.js:107 resolve begin
// index.js:109 resolve end
// index.js:117 script end
// index.js:101 after await:2
// index.js:112 then of promise1
// index.js:91 setImmediate
// index.js:83 setTimeout
// index.js:87 nextTick