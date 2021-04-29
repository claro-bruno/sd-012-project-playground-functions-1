// Desafio 10
function techList(tech, name) {
  let exit = [];
  let exit2 = 'Vazio!';
  tech.sort();
  if (tech.length !== 0) {
    for (let key in tech) {
      let newObject = {
        tech: tech[key],
        name: name,
      };
      exit.push(newObject);
    }
  }
  else {
    exit = exit2;
  }
  return exit;
}

// Desafio 11
function generatePhoneNumber(array) {
  let saida = '';
  if (array.length - 1 !== 10){
    saida = 'Array com tamanho incorreto';
  }
  else {
    for (let veri = 0; veri < array.length; veri += 1) {
      if (array[veri] < 0 || array[veri] > 9) {
        saida = 'não é possível gerar um número de telefone com esses valores';
        break;
      }
      for (let index = 0; index < array.length; index += 1) {
        let numbersRepeats = 0;
        for (let index2 = 0; index2 < array.length; index2 += 1) {
          if (array[index2] === array [index]) {
            numbersRepeats += 1
          }
        }
        if (numbersRepeats >= 3) {
          saida = 'não é possível gerar um npumero de telefone com esses valores';
          break;
        }
        else {
          saida = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];  
        }
      }
    }
  }
  return saida;
}

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
