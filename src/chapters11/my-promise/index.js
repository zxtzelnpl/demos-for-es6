// 1. 传入一个函数返回一个Promise
// 2. 实现then函数，返回一个新的Promise
// 3. reject和resolve状态会改变，且不可逆
// 4. 多个finally执行多次可以绑定多个finallyFun
// 5. 如果then结果出来就是一个Promise
// 6. 内部捕获错误，如果错误则直接执行

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exector) {
    this.value = null
    this.reason = null
    this.STATE = PENDING
    this.finallyFuns = [] // finally绑定的数组

    try {
      exector(
        this._resolve.bind(this),
        this._reject.bind(this)
      )
    } catch (error) {
      this._reject(error)
    }

    return this
  }

  then(fulifildedFun, rejectedFun) {
    this.fulifildedFun = fulifildedFun
    this.rejectedFun = rejectedFun

    if(this.STATE === PENDING) {
      return new MyPromise(
        (resolve, reject) => {
          this.afterFulifildedFun = resolve
          this.afterRejectedFun = reject
        }
      )
    }
    if(this.STATE === RESOLVED && typeof fulifildedFun === 'function') {
      return Promise.resolve(this.value)
    }

    if(this.STATE === REJECTED && typeof rejectedFun === 'function') {
      return Promise.reject(this.reason)
    }

  }

  catch(catchFun) {
    if(!this.rejectedFun) {
      return this.then(null, catchFun)
    }
  }

  finally(finallyFun) {
    this.finallyFuns.push(finallyFun)
    return this
  }

  static resolve(result) {
    if(result instanceof MyPromise) {
      return result
    }

    return new MyPromise(resolve => resolve(result))
  }

  static reject(reason) {
    if(reason instanceof MyPromise) {
      return reason
    }

    return new MyPromise(
      (undefined, reject) => reject(reason)
    )
  }

  _resolve(result) {
    if(this.STATE!==PENDING) { return }

    this.STATE = RESOLVED
    this.value = result
    let nextResult

    setTimeout(() => {
      if(typeof this.fulifildedFun === 'function') {
        nextResult = this.fulifildedFun(this.value)
      }

      if(nextResult instanceof MyPromise) {
        nextResult.then((_nextResult) => {
          typeof this.afterFulifildedFun === 'function' && this.afterFulifildedFun(_nextResult)
        })
      } else {
        typeof this.afterFulifildedFun === 'function' && this.afterFulifildedFun(nextResult)
      }
      this.finallyFuns.forEach(finallyFun => finallyFun())
    })
  }

  _reject(reason) {
    if(this.STATE!==PENDING) { return }

    this.STATE = REJECTED
    this.reason = reason
    let nextReason

    setTimeout(() => {
      if(typeof this.rejectedFun === 'function') {
        nextReason = this.rejectedFun(this.reason)
      }

      if(nextReason instanceof MyPromise) {
        nextReason.then(() => {
          typeof this.afterRejectedFun === 'function' && this.afterRejectedFun(nextReason)
        })
      } else {
        typeof this.afterRejectedFun === 'function' && this.afterRejectedFun(nextReason)
      }
      this.finallyFuns.forEach(finallyFun => finallyFun())
    })
  }
}

// 测试案例一
// const promise1 = new MyPromise(resolve => {
//   setTimeout(() => {
//     console.log('promise1')
//     resolve(1)
//   }, 1000)
// })

// const promise2 = promise1.then(() => {
//   console.log('promise2')
// }).then(() => {
//   console.log('promise3')
// }).finally(() => {
//   console.log('promise3 finally')
// })

// console.log(promise1)
// console.log(promise2)

// 测试案例二
// const promise1 = new MyPromise(resolve=> {
//   setTimeout(()=>{
//     resolve('promise1')
//   }, 1000)
// })

// let promise2

// const makePromise2 = (reason) => {
//   console.log('makePromise2')
//   console.log(reason)
//   return new MyPromise(resolve=> {
//     setTimeout(()=>{
//       resolve('promise2')
//     }, 1000)
//   })
// }

// const promise3 = promise1.then(res=> {
//   promise2 = makePromise2(res)
//   return promise2
// }).then(() => {
//   console.log('promise3 then')
// })

// setTimeout(() => {
//   console.log(promise1)
//   console.log(promise2)
//   console.log(promise3)
//   console.log(promise2 === promise3)
// }, 4000)

// 测试案例三
const promise1 = MyPromise.resolve(1)
const promise2 = promise1.then(() => {console.log('promise2')})

const promise3 = MyPromise.reject(2)
const promise4 = promise3.then(() => {console.log('promise4')})

console.log(promise1)
console.log(promise2)
console.log(promise3)
console.log(promise4)
