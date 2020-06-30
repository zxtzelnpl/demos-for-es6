function callback(IdleDeadline) {
  console.log(IdleDeadline.didTimeout)
  console.log(IdleDeadline.timeRemaining())
}

let index = 0;
function callbackForRaf() {
  console.log(index++)

  if(index < 40) {
    window.requestAnimationFrame(callbackForRaf)
  }
}

// window.requestAnimationFrame(callbackForRaf)

const id = window.requestIdleCallback(callback, { timeout: 10000 })

setTimeout(() => {
  console.log('setTimeout 300')
},300)

setTimeout(() => {
  console.log('setTimeout 400')
},400)

setTimeout(() => {
  console.log('setTimeout 500')
},500)

Promise.resolve(1).then(res=> {
  console.log(`Promise resolve ${res}`)
})

function walk() {
  const obj = {}
  for(let i = 0; i< 65535;i++) {
    obj[i] = i;
  }
  const str = JSON.stringify(obj)
}

let start = new Date()
console.log('before walk')

for(let i=0;i<200;i++) {
  walk()
}

let end = new Date()
console.log(`after walk，${end-start}`)

// window.cancelIdleCallback(id)