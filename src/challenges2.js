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
function generatePhoneNumber(arr) {
  let saida = '';
  let ddd = '' + arr[0] + arr[1];
  let num1 = '' + arr[2] + arr [3] + arr [4] + arr [5] + arr[6];
  let num2 = '' + arr[7] + arr[8] + arr[9] + arr[10];
  if (arr.length - 1 !== 10){
    saida = 'Array com tamanho incorreto.';
  }
  for (let veri = 0; veri < arr.length; veri += 1) {
    let numbersRepeats = 0;
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index2] === arr [veri]) {
        numbersRepeats += 1
      }
    }
    if (numbersRepeats >= 3 || arr[veri] < 0 || arr[veri] > 9) {
    saida = 'não é possível gerar um número de telefone com esses valores';
    break;
    }
    else {
      saida = '(' + ddd + ') ' + num1 + '-' + num2;  
    }
  }
  return saida;
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
