// gagal sendiri
const myFunction = (num) => {
  let numArr = [];
  const numStr = String(num);
  for (let i = 0; i < numStr.length; i++) {
    // numArr = num[i].push();
    numArr.push(Number(num[i]));
  }
  return numArr;
};

// const myFunction = (num) => {
//   let numArr = [];
//   for (let i = 0; i <= num.length; i++) {
//     // numArr = num[i].push();
//     numArr.push(num[i]);
//   }
//   return numArr;
// };
console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));
