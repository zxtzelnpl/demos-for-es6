const run = (taskDef) => {
  // 1. 创建迭代器
  let task = taskDef();
  let result = task.next()

  function step() {
    if(!result.done) {
      if(typeof result.value === 'function') {
        result.value((err, data) => {
          if(err) {
            result = task.throw(err)
          }
          // if(data === 'hi2') {
          //   result = task.throw('err')
          // }
          result = task.next(data)
          step()
        })
      } else {
        result = task.next(result.value);
        step()
      }
    }
  }

  step()
}

const taskDef1 = function *() {
  const first = yield 1
  console.log('first', first)
  const second = yield (1 + first)
  console.log('second',second)
  const third = yield (1 + second)
  console.log('third',third)
}


const getFetch = (n) => {
  return function(callback) {
    setTimeout(() => {
      callback(null, `hi${n}`)
    }, 100)
  }
}

const taskDef2 = function *() {
  try {
    const first = yield getFetch(1)
    console.log('first', first)
    const second = yield getFetch(2)
    console.log('second',second)
    const third = yield getFetch(3)
    console.log('third',third)
  } catch(err) {
    console.log('taskDef2 Err')
    console.log(err)
  }

}

// run(taskDef1)
run(taskDef2)
