
//first method

const num = 2;
const isPrimeNumber = true;
for (let i = 1; i < num; i++) {
    if(num % i == 0){
        isPrimeNumber == false;
    }
}
if(isPrimeNumber == true){
    console.log("is prime number");
}else{
    console.log("not a prime number");
}


//second method

const number = 5;
if(number == 1){
    console.log(`${number}is neither prime nor composite`);
}else if(number < 1){
    console.log(`${number}is not a prime number`);
}else{
    for(let i = 2; i < number; i++){
        if(number%i == 0){
            var res = `${number} is not a prime number`;
            break;
        }else{
            var res = `${number} is a prime number`
        }
    }
    console.log(res);
}
