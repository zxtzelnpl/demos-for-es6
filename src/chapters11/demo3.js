const log = console.log

const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolvePromise')
    }, 1000)
  })
}

const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('rejectPromise')
    }, 1000)
  })
}

// const p1 = rejectPromise()
const p1 = Promise.reject('dddd')
// const p1 = resolvePromise()
// const p2 = Promise.resolve(p1)
const p2 = Promise.reject(p1)

const p3 = p2.then(log).catch(() => {log('err')})

console.log(`p1===p2, ${p1===p2}`)
console.log(`p3===p2, ${p3===p2}`)
