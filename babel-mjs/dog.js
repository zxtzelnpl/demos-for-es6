var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
var regex = /dog/gi;
var ferret = p.replaceAll(regex, 'ferret');
var monkey = p.replaceAll('dog', 'monkey');
console.log(ferret); // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(monkey);
export { ferret, monkey };