// Desafio 10
function techList(array, name) {
  if (array[0] === undefined) {
    return 'Vazio!';
  }
  array.sort();
  let newList = [];
  for (let key in array) {
    let object = {};
    object.tech = array[key];
    object.name = name;
    newList.push(object); 
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
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
    for (let number2 of arr) {
      if (compareNuber === number2) {
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

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let tLine = [lineA, lineB, lineC];
  tLine.sort((a, b) => a - b);
  if ((tLine[2] < tLine[0] + tLine[1]) && (tLine[2] > Math.abs(tLine[0] - tLine[1]))) {
    return true;
  } else {
    return false;
  } 
}

// Desafio 13
function hydrate(string) {
  let numbers = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] == 1 || string[index] == 2 || string[index] == 3 || string[index] == 4 || string[index] == 5 || string[index] == 6 || string[index] == 7 || string[index] == 8 || string[index] == 9) {
      numbers.push(parseInt(string[index]));
    }   
  }
  let total = 0;
  for (let number of numbers) {
    total += number;
  } 
  if (total === 1) {
    return `${total} copo de água`;
  } else {
    return `${total} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
