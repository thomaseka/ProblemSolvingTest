// const myFunction = (a, b) => {
//   if (a < b) {
//     return a / b;
//   } else {
//     return b * a;
//   }
// };

// one liner
const myFunction = (a, b) => (a < b ? a / b : b * a);

console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
console.log(myFunction(8, 20));
console.log(myFunction(2, 0.5));
