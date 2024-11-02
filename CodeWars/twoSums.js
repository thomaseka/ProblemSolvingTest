function grow(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result = result * x[i];
  }
  return result;
}

function grow(x) {
  return x.reduce((acc, curr) => acc * curr, 1);
}

// one liner
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4]));
