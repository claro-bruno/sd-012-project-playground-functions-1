function highestCount(numbers) {
    let highIndex = 0;
    let repetitions = 0;
    for(let index in numbers) {
      if(numbers[index] > highIndex) {
        highIndex = numbers[index];
      }
    }
    for(let number of numbers){
      if( number === highIndex){
        repetitions += 1;
      }
    }
    return repetitions;
  }

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));