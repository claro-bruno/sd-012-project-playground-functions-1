function highestCount(numbers) {
  // seu código aqui
  let max = numbers[0];
  for (let index = 1; index < numbers.length; index += 1){
    if(numbers[index] > max){
      max = numbers[index];
    }
  }
  let accumulator = 0;
  for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] === max){
      accumulator += 1;
    }
  }
  return accumulator;
}
console.log(highestCount([0, 0, 0]))