// 要求编写函数实现，根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)

async function request(urls, maxNumber, callback) {
  // 标记是否可以继续请求
  let hasMore = true

  // 返回最大请求数目的promise
  function makeMaxRequest(urls, maxNumber) {
    const promiseArray = []
    while(urls.length&&maxNumber>0) {
      const url = urls.shift()
      promiseArray.push(fetch(url))
      maxNumber--
    }
    hasMore = urls.length
    return promiseArray
  }


  try {
    // 1. 循环发送请求
    while(hasMore) {
      await Promise.all(makeMaxRequest(urls, maxNumber))
    }
    
    // 2. 回调
    callback()
  } catch (error) {
    // TODO: 错误处理
  }
}
