function filterEvenNumbers(numbers) { 
    return numbers.filter(num => num % 2 === 0); 
  }
const even = filterEvenNumbers(45);
console.log(even);