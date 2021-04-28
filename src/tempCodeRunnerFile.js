let numberArray1 = [9, 1, 2, 3, 9, 5, 7];
let numberArray2 = [0, 4, 4, 4, 9, 2, 1];
let numberArray3 = [0, 0, 0];

function getHighestNumberFromArray(array) {
  let highestNumber = 0;
  for (let index in array) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return highestNumber;
}
console.log(getHighestNumberFromArray(numberArray1));
console.log(getHighestNumberFromArray(numberArray2));
console.log(getHighestNumberFromArray(numberArray3));