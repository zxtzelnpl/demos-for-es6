// 1. 传入一个函数返回一个Promise
// 2. 实现then函数，返回一个新的Promise
// 3. reject和resolve状态会改变
// 4. 多个finally执行多次可以绑定多个finallyFun
class MyPromise {
  constructor(func) {
    this.value = undefined
    this.STATE = 'pending'
    this.finallyFuns = [] // finally绑定的数组
    func(
      this.resolve.bind(this),
      this.reject.bind(this)
    )
    return this
  }

  then(fulifildedFun, rejectedFun) {
    this.fulifildedFun = fulifildedFun
    this.rejectedFun = rejectedFun

    return new MyPromise(
      (resolve, reject) => {
        this.afterFulifildedFun = resolve
        this.afterRejectedFun = reject
      }
    )
  }

  catch(catchFun) {
    if(!this.rejectedFun) {
      this.rejectedFun = catchFun
    }
  }

  finally(finallyFun) {
    this.finallyFuns.push(finallyFun)
    return this
  }

  resolve(result) {
    this.STATE = 'resolved'
    const nextResult = typeof this.fulifildedFun === 'function' && this.fulifildedFun(result)
    typeof this.afterFulifildedFun === 'function' && this.afterFulifildedFun(nextResult)
    this.finallyFuns.forEach(finallyFun => finallyFun())
  }

  reject(error) {
    this.STATE = 'rejected'
    const nextError = typeof this.rejectedFun === 'function' && this.rejectedFun(error)
    typeof this.afterRejectedFun === 'function' && this.afterRejectedFun(nextError)
    this.finallyFuns.forEach(finallyFun => finallyFun())
  }
}