const str = 'AaaBbbCcc'
const newStr = str.replace(/[A-Z]/g, function(a, b, c, d) {
  if(b === 0) { return a.toLowerCase() }
  else { return `-${a.toLowerCase()}`}
})