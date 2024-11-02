function isEven(params) {
  if (params % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(10));
console.log(isEven(-4));
console.log(isEven(5));
console.log(isEven(-111));
