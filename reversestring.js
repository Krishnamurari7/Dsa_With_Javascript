let str = 'sonu is intelligent';
const reverseString = str.split(' ')
const reverse = str.split('')
const count = reverseString.length-1;
const rever = reverse.length - count;
console.log(`total letter are == ${rever}`);
console.log(`total space are == ${count}`);
const rev = reverseString.reverse().join(''); 
console.log(`reverse string are == ${rev}`);

