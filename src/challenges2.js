// Desafio 10
function techList(techArr, name) {
  techArr.sort();
  let res = [];
  for(let index = 0; index < techArr.length; index +=1) {
    let obj = {
      tech: techArr[index],
      name: name
    };
    res.push(obj); 
  }
  if(techArr.length === 0) {
    return 'Vazio!'
  } else {
    return res;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  // AJUDA EM: https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/    &    https://www.w3resource.com/javascript/form/all-numbers.php
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index +=1) {
    let rep = 0;
    for (let index2 = 0; index2 < array.length; index2 +=1) {
      if (array[index] === array[index2]) {
        rep += 1;
        if (rep >= 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
    if (array[index] < 0 || array[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  return `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let bool = true;
  let first = Math.abs(lineA);
  let second = Math.abs(lineB);
  let third = Math.abs(lineC);
  if(second + third < first|| third + first < second || second + first < third || first - second > third || third - second > first || first - third > second) {
    bool = false;
  } else {
    return bool;
  }
  return bool;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let sum = 0;
  let numbers = str.match(/\d+/g).map(Number);
  let ressaca = ' copos de água';
  for (let index = 0; index < numbers.length; index+=1) {
    sum += numbers[index]
  }
  return sum + ressaca;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};