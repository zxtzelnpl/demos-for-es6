const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

const ferret = p.replaceAll(regex, 'ferret')
const monkey = p.replaceAll('dog', 'monkey')

console.log(ferret); // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

console.log(monkey);

export default {
  ferret,
  monkey
}