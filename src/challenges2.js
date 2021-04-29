// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  // AJUDA EM: https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/ & https://www.w3resource.com/javascript/form/all-numbers.php
  let phoneNum = `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
  for (let index = 0; index < array.length; index +=1) {
    let rep = 0;
    for(let index2 = 0; index2 < array.length; index2 +=1) {
      if(array[index] === array[index2]) {
        rep += 1;
        if(rep >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    if (array.length !== 11) {
      phoneNum = 'Array com tamanho incorreto.' 
    } else if (array[index] < 0 || array[index] > 9) {
      phoneNum = "não é possível gerar um número de telefone com esses valores";
    } else {
      return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
    }
  }
  return phoneNum;
}
console.log(generatePhoneNumber([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

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


