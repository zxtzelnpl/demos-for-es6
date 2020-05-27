// browser
// promise2
// promise3
// promise1

// node
// promise2
// promise3
// promise1

const log = value=> console.log(value)

const promise1 = new Promise(function(resolve) {
  setTimeout(() => {
    resolve('promise1')
  })
}).then(log)

const promise2 = new Promise(function(resolve) {
  resolve('promise2')
}).then(log)

const promise3 = Promise.resolve('promise3').then(log)
