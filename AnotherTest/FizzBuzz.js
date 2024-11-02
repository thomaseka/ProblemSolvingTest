const fizzBuzz = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      // array
      result.push("Fizz Buzz");
      // console
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      // array
      result.push("Fizz");
      // console
      console.log("Fizz");
    } else if (i % 5 == 0) {
      // array
      result.push("Buzz");
      // console
      console.log("Buzz");
    } else {
      // array
      result.push(i);
      // console
      console.log(i);
    }
  }
  return result;
};

const result = fizzBuzz(30);
console.log(result);
