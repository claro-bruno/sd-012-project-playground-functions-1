function fizzBuzz(array) {
  // seu código aqui
  let fbArray = [];
for (let index in array) {
  if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
    fbArray.push("fizzbuzz");
  } else if (array[index] % 3 == 0) {
    fbArray.push("fizz");
  } else if (array[index] % 5 == 0) {
    fbArray.push("buzz");
  } else {
    fbArray.push("bug!");
  }
} return fbArray;
}console.log(fbArray([2, 15, 7, 9, 45]));
