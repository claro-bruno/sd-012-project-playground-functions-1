// Desafio 10
function techList(array, nome) {
  let objList = [];
  array.sort();
  if (array.length === 0) {
    objList = 'Vazio!';
  } else {
    for(let index = 0; index < array.length; index += 1) {
      let novoItem = {
        tech: array[index],
        name: nome
      };
      objList.push(novoItem);
    };
  }
  return objList;
};

//console.log(techList([], "Pedro"));

// Desafio 11
function generatePhoneNumber(array2) {
  let result = 0;
  let contador = 0;
  let aux = 0;
  if (array2.length != 11) {
    result = 'Array com tamanho incorreto.';
  };

  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] < 0 || array2[index] > 9) {
      result = 'não é possível gerar um número de telefone com esses valores.';
    };
  };

  for (let index = 0; index < array2.length; index += 1) {
      for (let index2 = 1; index2 < array2.length; index2 += 1){
        if (array2[index2] === array2[index]) {
          contador = contador + 1;
          if (contador >= 3) {
            result = 'não é possível gerar um número de telefone com esses valores.';
          } else {
            contador = 0;
          }
        };
      };
  };

  result = '(' + array2[0]+array2[1] + ') ' + array2[2]+array2[3]+array2[4]+array2[5]+array2[6] + '-' + array2[7]+array2[8]+array2[9]+array2[10] + '.';

  return result;
};

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
