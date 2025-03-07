const fibonacci = async (limit) => {
  let finalArr = [];

  let firstNum = 0;
  let secNum = 1;

  for (let index = 0; index < limit; index++) {
    console.log(firstNum);
    finalArr.push(firstNum);
    fiboNum = firstNum + secNum;
    firstNum = secNum;
    secNum = fiboNum;
  }

  return finalArr;
};

const result = await fibonacci(5);
console.log(result);
const tambahan = await fibonacci(10);
console.log(tambahan);
