// Desafio 10
function techList(tech, name) {
  let list = [];
  for (let index in tech) {
    let order = tech.sort();
    let object = {
      tech: order[index],
      name: name
    }
    list.push(object);
  }
  if (list.length === 0) {
    return 'Vazio!'
  } else {
    return list;
  };
};

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Renan'));

// Desafio 11
function generatePhoneNumber(numbers) {
  let prefix = `(${numbers[0]}${numbers[1]})`;
  let phoneNumber = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
  let newPhoneNumber = `${prefix} ${phoneNumber}`
  let contRepeated = 0;
  let contNumber = 0;
  for (let num in numbers) {
    let verifyNumber = numbers[num];
    for (let num2 in numbers) {
      if (verifyNumber === numbers[num2]) {
        contNumber += 1;
      }
    }
    if (contNumber > contRepeated) {
      contRepeated = contNumber;
    }
    contNumber = 0;
    if (numbers.length !== 11) {
      return 'Array com tamanho incorreto.'
    }
    else if (numbers[num] < 0 || numbers[num] > 9 || contRepeated >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length === 0) {
    return'Array com tamanho incorreto.'
  } else {
    return newPhoneNumber;
  };
};

console.log(generatePhoneNumber([]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isPossible = false;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    isPossible = true;
  }
  if (lineA > Math.abs((lineB - lineC)) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    isPossible = true;
  };
  return isPossible;
};

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let takeNum = /\d+/g;
  let total = 0;
  let match = string.match(takeNum);
  for (let index = 0; index < match.length; index += 1) {
    total += parseInt(match[index]);
  }
  if (total > 1) {
    return `${total} copos de água`
  } else {
    return `${total} copo de água`
  }
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervajas e 1 copo de vinho'));
console.log(hydrate('1 tequila e 3 vodkas'));

var regex = /\d+/g;
var string = "you can enter maximum 500 choices";
var matches = string.match(regex);

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
