{
  function makeRequest(url, timeout = 2000, callback = () => {console.log('callback')}) {
    console.log(`url: ${url}`)
    console.log(`arguments:${arguments.length}`)
    console.log(timeout)
    callback()
  }

  console.log('函数的长度：'+ makeRequest.length)

  makeRequest('/foo')
  makeRequest('/foo', 0)
  makeRequest('/foo', 0, ()=> { console.log('third') } )

}

// {
//   function make1 ( a, b = 1, c = 2, d = 3) {
//     console.log(arguments.length)
//   }
//   console.log(make1.length)
//   make1(1, 2, 3, 4, 5, 6)

//   function make2 ( a,b, c=3, ...res) {
//     console.log(arguments.length)
//   }
//   console.log(make2.length)
//   make2(1, 2, 3, 4, 5, 6, 7)
// }