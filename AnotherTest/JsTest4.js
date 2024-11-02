// function myFunction(numbers) {
//   decimalValue = Math.floor(numbers);
//   if (decimalValue != numbers) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function myFunction(numbers) {
//     if (numbers % 1 == 0) {
//       return true;
//     } else {
//       return false;
//     }
// }

// one liner
const myFunction = (numbers) => (numbers % 1 == 0 ? true : false);

console.log(myFunction(4));
console.log(myFunction(1.123));
console.log(myFunction(1048));
console.log(myFunction(10.58));
