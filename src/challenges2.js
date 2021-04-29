// Desafio 10
function bubbleSort(array){
  for (let bubble = 0; bubble < array.length - 1; bubble += 1){
    for (let index = 0; index < array.length - bubble - 1; index += 1){
        if (array[index] > array[index + 1]){
            [array[index], array[index + 1]] = [array[index + 1], array[index]];
        }
    }
  }
  return array;
}
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(bubbleSort(array));

function techList(technologies, name) {
  let sortedTechnologies = [];
  let objectList = [];
  if (technologies.length === 0){
    return 'Vazio!';
  }
  else {
    sortedTechnologies = bubbleSort(technologies);
    for (item of sortedTechnologies){
      let objectInsertion = {"tech": item, "name": name};
      objectList.push(objectInsertion);
    }
  }
  return objectList;
}
// let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// let name = 'Lucas';
// let array = [];
// console.log(techList(array,name));

// Desafio 11

function mostRepeatedCount(array){
  let maxElement = array[0];
  let maxCount = 1;
  for (let index = 0; index < array.length - 1; index += 1){
      let count = 1;
      for (let pointer = index + 1; pointer < array.length; pointer += 1){
          if (array[index] === array[pointer]){
              count += 1;
          }
      }
      if (count > maxCount){
          maxCount = count;
          maxElement = array[index];
      }
  }
  return maxCount;
}
// let array = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
// console.log(mostRepeatedCount(array));

function containsInvalidDigit(array){
  let isInvalid = 0;
  for (let number of array){
    if (number < 0 || number > 9 || mostRepeatedCount(array) >= 3){
      isInvalid += 1;
    }
  }
  if (isInvalid > 0){
    return true;
  }
  else {
    return false;
  }
}
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// let array = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
// console.log(containsInvalidDigit(array));

function generatePhoneNumber(numberArray) {
  let formatedNumber = '';
  let areaCode = firstHalf = secondHalf = '';
  if (numberArray.length !== 11){
    return 'Array com tamanho incorreto.';
  }
  else if (containsInvalidDigit(numberArray)){
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    for (let index = 0; index < 2; index += 1){
      areaCode += numberArray[index];
    }
    for (let index = 2; index < 7; index += 1){
      firstHalf += numberArray[index];
    }
    for (let index = 7; index < 11; index += 1){
      secondHalf += numberArray[index];
    }
  }
  formatedNumber = '('+areaCode+') '+firstHalf+'-'+secondHalf;
  return formatedNumber;
}
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// let array = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
// console.log(generatePhoneNumber(array));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB)) && (lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineA - lineB))){
    return true;
  }
  else {
    return false;
  }
}
// console.log(triangleCheck(10, 14, 8));



// Desafio 13

// Com uso da dica em https://www.encodedna.com/javascript/how-to-get-numbers-from-a-string-in-javascript.htm
// var tName = 'arun_4874_541';
// console.log(tName.match(/\d+/g));

function hydrate(drinks) {
  let drinkList = drinks.match(/\d+/g);
  let glassesOfWater = 0;
  for (drink in drinkList){
    glassesOfWater += parseInt(drinkList[drink]);
  }
  return glassesOfWater;
}
// let drinks = '1 cachaça, 5 cervejas e 1 copo de vinho';
// console.log(drinks.match(/\d+/g));
// let drinks = '1 cerveja';
// console.log(hydrate(drinks));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
