// Desafio 10
let obj = {};
let resultado = [];
function techList(tech, name) {
  if (tech.length > 0) {
  let ordtech = [];
  ordtech = tech.sort();
  for(let index = 0; index < tech.length; index += 1) {
    obj = {
      tech: ordtech[index],
      name: name
    }
  resultado[index] = obj;
}
} else {
  resultado = "Vazio!";
}
return resultado;
}

//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));


// Desafio 11 ||
let result;
let tri = 0;
let num = [];
let resposta;

function generatePhoneNumber(number) {
  resposta ='(' + number[0] + number[1] +') ' + number[2] + number[3] + number[4] + number[5] + number[6] + '-' + number[7] + number[8] + number[9] + number[10];
  num = number.sort((a,b)=> a - b);
  
  for(let i = 0; i < 9; i += 1) {
    if(num [i] == num[i + 2]) {
      tri = tri + 1;
    } else {
      tri = tri;
    }
  }

  if(number.length != 11) {
    result = "Array com tamanho incorreto.";
  }
  else if(num[10] > 9 || num[0] < 0) { 
    result = "não é possível gerar um número de telefone com esses valores";
} else if(tri != 0) {
    result = "não é possível gerar um número de telefone com esses valores";
  }
 else {
  result = resposta
    } 
return result;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))



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
