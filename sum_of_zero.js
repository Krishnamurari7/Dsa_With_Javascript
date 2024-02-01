function sumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] == 0) {
        return [array[i], array[j]];
      }
    }
  }
}
const result = sumZero([-5, -4, -3, -2, 0, 2, 8, 3, 4]);
console.log(result);

//o(n^2)  time complextiy




//second method
function findSum(array){
    let left=0;
    let right=array.length-1;
    while(left < right){
        sum = array[left]+array[right];
        if(sum===0){
            return[array[left], array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

const output = sumZero([-5, -4, -3, -2, 0, 2, 8, 3]);
console.log(output);

//o(n) time complextiy
