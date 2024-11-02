function myFunction(char, sent) {
  let counter = 0;
  for (let i = 0; i <= sent.length; i++) {
    if (char == sent[i]) {
      counter++;
    }
  }
  return counter;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
console.log(
  myFunction("h", "how many times does the character occur in this sentence?")
);
console.log(
  myFunction("?", "how many times does the character occur in this sentence?")
);
console.log(
  myFunction("z", "how many times does the character occur in this sentence?")
);
