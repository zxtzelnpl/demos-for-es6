import initPromiseRejections from './promiseRejections'

export default class Monitor {
  init() {
    if(window.monitor) {
      return window.monitor
    } else {
      window.monitor = this
      window.addEventListener('error', this.handleWindowError)
      initPromiseRejections()
    }
  }
  // 处理window.onerror的方法
  handleWindowError(message, url, lineNo, columnNo, error) {
    console.log('Monitor --> handleWindowError')
    console.log(`The message is`)
    console.log(message)
    console.log(`The url is`)
    console.log(url)
    console.log(`The lineNo is`)
    console.log(lineNo)
    console.log(`The columnNo is`)
    console.log(columnNo)
    console.log(`The error is`)
    console.log(error)
  }
}