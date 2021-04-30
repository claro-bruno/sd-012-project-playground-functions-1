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

console.log(techList([], "Pedro"));

// Desafio 11
function generatePhoneNumber(array) {
  let result = 0;
  let contador = 0;
  let aux = 0;
  if (array.length != 11) {
    result = 'Array com tamanho incorreto. erro 1';
  };

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      result = 'não é possível gerar um número de telefone com esses valores. erro 2';
    };
  };

  for (let index = 0; index < array.length; index += 1) {
      for (let index2 = 1; index2 < array.length; index2 += 1){
        if (array[index2] === array[index]) {
          contador = contador + 1;
          if (contador >= 3) {
            result = 'não é possível gerar um número de telefone com esses valores. erro 3';
          } else {
            contador = 0;
          }
        };
      };
  };

  result = '(' + array[0]+array[1] + ') ' + array[2]+array[3]+array[4]+array[5]+array[6] + '-' + array[7]+array[8]+array[9]+array[10] + '.';

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
