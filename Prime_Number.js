
//first method

// const num = 12;
// const isPrimeNumber = true;
// for (let i = 1; i < num; i++) {
//     if(num % i == 0){
//         isPrimeNumber == false;
//     }
// }
// if(isPrimeNumber == true){
//     console.log(`${num} is prime number `);
// }else{
//     console.log("not a prime number");
// }




//second method

// const number = 15;
// if(number == 1){
//     console.log(`${number}is neither prime nor composite`);
// }else if(number < 1){
//     console.log(`${number}is not a number`);
// }else{
//     for(let i = 2; i < number; i++){
//         if(number%i == 0){
//             var res = `${number} is not a prime number`;
//             break;
//         }else{
//             var res = `${number} is a prime number`
//         }
//     }
//     console.log(res);
// }

//third method
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  const numToCheck = 17;
  if (isPrime(numToCheck)) {
    console.log(`${numToCheck} is a prime number.`);
  } else {
    console.log(`${numToCheck} is not a prime number.`);
  }
  

  //fourth method


// const a = 1;

// if(a == 2){
//   console.log("it is prime number");
// }else if(a < 0){
//   console.log("it is not a positive number"); 
// }else{
//   for(let i = 2; i < a; i++){
//     if(a % i == 0){
//       var res = `${a} is a not prime number` 
//       break;
//     }
//     else{
//       var res = `${a} is a prime number` 
//     }
//   }
//   console.log(res);
// }