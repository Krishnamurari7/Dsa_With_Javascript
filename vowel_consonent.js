const string = "my name is krishna murari kumar";

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const result = countVowel(string);
console.log(result);

//second method

const string1 = "my name is krishna murari";
const vowels = ["a", "e", "i", "o", "u"];
function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

const result1 = countVowel(string);
console.log(result1);
