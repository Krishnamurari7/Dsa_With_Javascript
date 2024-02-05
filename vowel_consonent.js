const string = "my name is krishna murari kumar";

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const result = countVowel(string);
console.log(result);

