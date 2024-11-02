// wrong logic
// function concatString(a, b) {
//   for (let i = 0; i <= a.length; i++) {
//     let loopA = a[i];
//     for (let j = 0; j <= b.length; j++) {
//       let loopB = b[j];
//       if (loopA == loopB) {
//         return b + a;
//       } else {
//         return a + b;
//       }
//     }
//   }
// }

function concatString(a, b) {
  // Check if 'b' is a substring of 'a' using loops
  for (let i = 0; i <= a.length - b.length; i++) {
    let found = true;
    // Check if the substring of 'a' starting at 'i' matches 'b'
    for (let j = 0; j < b.length; j++) {
      if (a[i + j] !== b[j]) {
        found = false;
        break;
      }
    }
    // If 'b' is found within 'a', return b + a
    if (found) {
      return b + a;
    }
  }
  // If 'b' is not found within 'a', return a + b
  return a + b;
}

// right answer
// const concatString = (a, b) => {
//   if (a.includes(b)) {
//     return b + a;
//   } else {
//     return a + b;
//   }
// };

console.log(concatString("cheese", "cake"));
console.log(concatString("lips", "s"));
console.log(concatString("Java", "script"));
console.log(concatString(" think, therefore I am", "I"));
console.log(concatString("I", " think, therefore I am"));
