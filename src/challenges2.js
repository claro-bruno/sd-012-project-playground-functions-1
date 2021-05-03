// Desafio 10
let obj = {};
let resultado = [];
function techList(tech, name) {
  if (tech.length > 0) {
    let ordtech = [];
    ordtech = tech.sort();
    for (let index = 0; index < tech.length; index += 1) {
      obj = {
        tech: ordtech[index],
        name: name,
      };
      resultado[index] = obj;
    }
  } else {
    resultado = 'Vazio!';
  }
  return resultado;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));

// Desafio 11 ||
let result;
let num = [];
let resposta;
function generatePhoneNumber(number) {
  let tri = 0;
  resposta ='(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10];
  num = number.sort((a, b) => a - b);
  for (let i = 0; i < 9; i += 1) {
    if (num [i] === num[i + 2]) {
      tri = tri + 1;
    } else {
      tri = tri;
    }
  }

  if(number.length !== 11) {
    result = 'Array com tamanho incorreto.';
  }
  else if (num[10] > 9 || num[0] < 0) { 
    result = 'não é possível gerar um número de telefone com esses valores';
  } else if (tri !== 0) {
    result = 'não é possível gerar um número de telefone com esses valores';
  }
 else {
  result = resposta
    }; 
return result;
}
// console.log(generatePhoneNumber([1, 0, 0, 0, 5, 3, 7, 8, 9, 1, 8]));
// console.log(generatePhoneNumber([1, 2, -8, 0, 5, 3, 7, 8, 9, 1, 8]));
// console.log(generatePhoneNumber([1, 2, 8, 10, 5, 3, 7, 8, 9, 1, 8]));
// console.log(generatePhoneNumber([ 8, 0, 5, 3, 7, 8, 9, 1, 8]));
// console.log(generatePhoneNumber([0, 1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));
// console.log(generatePhoneNumber([1, 2, 4, 0, 5, 3, 7, 8, 9, 1, 8]));

// Desafio 12
let triangulo = []
let resp
function triangleCheck(lineA, lineB, lineC) {
  triangulo = [lineA,lineB,lineC]
  triangulo = triangulo.sort((a, b) => a - b);

  if (triangulo[2] > triangulo[1] + triangulo [0] || triangulo[0] < triangulo[2] - triangulo[1]){
    resp = false
  } else{
    resp = true
  }
return resp 
}
// console.log(triangleCheck(10,3,8))

// Desafio 13
function hydrate(bebida) {
  let somaTotal = 0;
  let numero = [];
  for (i = 0; i < bebida.length; i += 1) {
    if(bebida[i] > 0) {
      numero = parseInt(bebida[i]);
      somaTotal = somaTotal + numero;
    }
  }
  return somaTotal;
}
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
// console.log(hydrate("1 cachaça, 6 cervejas e 1 copo de vinho"));
// console.log(hydrate("2 cachaça, 0 cervejas e 1 copo de vinho"));
// console.log(hydrate("8 cachaça, 9 cervejas e 7 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
