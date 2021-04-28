// Desafio 10
function techList(array, string) {
  // seu código aqui
  let habilidade = {};
  let habilidades = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      habilidade.tech = array[index];
      habilidade.name = string;
      habilidades.push(habilidade);
      habilidade = {};
    }
    return habilidades;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

console.log('==================================================')

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let numero = '('
  let numerosRepetidos = false;
  let numerosInvalidos = false;
  for (let index = 0; index < array.length; index += 1) {
    let cont = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        cont += 1;
        if (cont >= 3) {
          numerosRepetidos = true;
        }
      }
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      numerosInvalidos = true;
    }
  }
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else if (numerosRepetidos === true || numerosInvalidos === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (index === 1) {
        numero = numero + array[index] + ') ';
      } else if (index === 6) {
        numero = numero + array[index] + '-';
      } else {
        numero = numero + array[index];
      }
    }
    return numero;
  }
}
console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
