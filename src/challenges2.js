// Desafio 10
function techList(array, name) {
  if(array[0] === undefined) {
    return 'Vazio!';
  }
  array.sort();
  let newList = [];
  for (let key in array) {
    let object = {};
    object['tech'] = array[key];
    object['name'] = name;
    newList.push(object); 
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(arr) {

  if (arr.length !== 11){
    return 'Array com tamanho incorreto.';
  }

  for (let number of arr) {
    if (number < 0 || number > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let repeatTimes = 0;
  let count = 0;
  for (let number of arr) { 
    let compareNuber = number;
      for (let number2 of arr){
      if(compareNuber === number2) {
        count += 1;
    }
    }
    if (count >= repeatTimes) {
      repeatTimes = count;
    }

    count = 0;
  } 
  if (repeatTimes >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  arr.splice(0, 0, '(');
  arr.splice(3, 0, ')');
  arr.splice(4, 0, ' ');
  arr.splice(10, 0, '-');

  return arr.join('');
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleLine = [lineA, lineB, lineC];
  triangleLine.sort((a,b) => a - b);
  if((triangleLine[2] < triangleLine[0] + triangleLine[1]) && (triangleLine[2] > Math.abs(triangleLine[0] - triangleLine[1]))) {
    return true;
  } else {
    return false;
  }
  
}
console.log(triangleCheck(10,14,8));
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
