const run = (taskDef) => {
  // 1. 创建迭代器
  let task = taskDef();
  let result = task.next()

  function step() {
    if(!result.done) {
      // Promise
      // .resolve(result.value)
      result.value
      .then(res => {
        result = task.next(res)
        step()
      })
      .catch(err => {
        result =task.throw(err)
        step()
      })
    }
  }
  step()
}


const getFetch = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(n === 2) {reject('error')}
      resolve(`hi-${n}`)
    }, 1000)
  })
}

const taskDef2 = function *() {
  try {
    const first = yield getFetch(1)
    console.log('first', first)
    const second = yield getFetch(2)
    console.log('second',second)
    const third = yield getFetch(3)
    console.log('third',third)
  } catch (error) {
    console.log(error)
  }

}
run(taskDef2)
