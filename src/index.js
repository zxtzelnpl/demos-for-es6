// import './chapters2'
// import './chapters13'

import './error/_monitor.js'
import './error/index'

import './error/normal.js'


// let rejected = null

// window.addEventListener('unhandledrejection', function(promise) {
//     console.log('unhandledRejection')
//     console.log(promise.message)
//     console.log(rejected === promise)
// })

// window.addEventListener('rejectionhandled', function(promise) {
//     console.log('rejectionHandled')
//     console.log(rejected === promise)
// })

// rejected = Promise.reject(new Error('Explosion!'))

// setTimeout(function() {
//     rejected.catch(function(value) {
//         console.log(value.message)
//     })
// }, 3000)