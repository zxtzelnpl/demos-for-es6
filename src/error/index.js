
const app = document.getElementById('app')

let unhandlePromise = null

const button1 = document.createElement('button')
button1.id = 'button1'
button1.innerHTML = 'button1'
app.append(button1)
button1.addEventListener('click', () => {
  unhandlePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(456)
    }, 1000)
  })
})

const button2 = document.createElement('button')
button2.id = 'button2'
button2.innerHTML = 'button2'
app.append(button2)
button2.addEventListener('click', () => {
  unhandlePromise.catch(error => {
    console.log(error)
  })
})





// try {
  // a()
// } catch (error) {
//   console.log(error)
// }

// setTimeout(() => {
//   var script = document.createElement('script')
//   script.src = '/a12'
//   window.document.body.append(script)
// }, 1000)

// setTimeout(() => {
//   var img = document.createElement('img')
//   img.src = '/a12'
//   window.document.body.append(img)
// }, 1000)

// setTimeout(() => {
//   throw new Error('123')
// })


// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('EXplosion')
//   }, 1000)
// })
// // promise1.then(() => {
// //   console.log('promise1')
// // })

// setTimeout(
//   () => {
//     promise1.catch(error => {
//       console.log(error)
//     })
//   },
//   2000
// )

// setTimeout(() => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(456)
//     }, 1000)
//   }).catch(error => {
//     console.log(error)
//   })
// }, 3000)


// setTimeout(() => {
//   Promise.reject(new Error('EXplosion!'))
// }, 4000)