function debounce(func, wait) {

  let timeId

  function debounceFun() {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      func.call(this, arguments)
    }, wait)
  }

  return debounceFun
}


function throttle(func, wait) {
  
  let flag = true,
  lastArgs,
  lastThis,
  hasNext

  function excutor () {
    flag = false
    func.call(lastThis, lastArgs)
    lastThis= lastArgs = undefined
    hasNext=false

    setTimeout(() => reset, wait)
  }

  function reset () {
    flag = true

    if(hasNext) {
      excutor()
    }
  }

  function throttleFun() {
    lastArgs = arguments
    lastThis = this
    if(flag) {
      excutor()
    } else {
      hasNext = true
    }
  }

  return throttleFun
}
