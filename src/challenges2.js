// Desafio 10
function techList(tech, name) {
  let techListObject = {
    tech: '',
    name: ''
  }

  for (index = 0; index < tech.length; index += 1) {
    techListObject.tech = tech;
    techListObject.name = name;
  }

  return `${tech[index]}, ${name}`;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let numeroCorreto = true;
  let numero;
  if (arrayNumbers.length == 11) {
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      let count = 0;
      numero = arrayNumbers[index];
      for (let number of arrayNumbers) {
          if (number == arrayNumbers[index]) {
            count+=1;
          }
      }

      if ((arrayNumbers[index] > 9) || (arrayNumbers[index] < 0 || count >= 3)) {
        numeroCorreto = false;
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    numeroCorreto = false;
    return 'Array com tamanho incorreto.';
  }
  if (numeroCorreto === true) {
    return `(${arrayNumbers[0]}${arrayNumbers[1]}) ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
  }
}

console.log(generatePhoneNumber(([1, 2, 9, 4, 5, 6, 9, 8, 9, 0, 1])));

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
