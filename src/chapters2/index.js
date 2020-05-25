// UTF-16 码位
{
  console.log('###UTF-16 码位###')
  const text = '𠮷'
  
  console.log(text.length)
  console.log(/^.$/.test(text))
  console.log(text.charAt(0))
  console.log(text.charAt(1))
  console.log(text.charCodeAt(0))
  console.log(text.charCodeAt(1))
}

// codePointAt()
{
  console.log('###codePointAt()###')
  const text = '𠮷a'
  console.log(text.charCodeAt(0))
  console.log(text.charCodeAt(1))
  console.log(text.charCodeAt(2))
  console.log(text.codePointAt(0))
  console.log(text.codePointAt(1))
  console.log(text.codePointAt(2))

  const is32Bit = (c) => {
    return c.codePointAt(0) > 0xFFFF
  }
  console.log(is32Bit('𠮷'))
  console.log(is32Bit('a'))

}

// String.fromCodePoint()
{
  console.log('###String.fromCodePoint()###')
  console.log(String.fromCodePoint(134071))
}