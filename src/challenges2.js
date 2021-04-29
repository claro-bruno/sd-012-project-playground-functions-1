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
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Renan'));

// Desafio 11
function generatePhoneNumber(numbers) {
  let prefix = `(${numbers[0]}${numbers[1]})`;
  let phoneNumber = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
  let newPhoneNumber = prefix + phoneNumber
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
    if (numbers[num] < 0 || numbers[num] > 9 || contRepeated >= 3) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto'
  } else {
    return newPhoneNumber
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
