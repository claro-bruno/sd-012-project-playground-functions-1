let numberArray4 = [2, 15, 7, 9, 45];
let numberArray5 = [7, 9];
let numberArray6 = [9, 25];

function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 !== 0) {
      stringArray.push("fizz");
    } else if (numberArray[index] % 5 === 0 && numberArray[index] % 3 !== 0) {
      stringArray.push("buzz");
    } else if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      stringArray.push("fizzbuzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
}
console.log(fizzBuzz(numberArray4));
console.log(fizzBuzz(numberArray5));
console.log(fizzBuzz(numberArray6));