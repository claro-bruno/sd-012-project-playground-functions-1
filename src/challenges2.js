// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  tech.sort();
  let emptylist = [];
  for (i = 0; i < tech.length; i += 1) {
    let object = {
      tech: tech[i],
      name,
    };
    emptylist[i] = object;
  }
  return emptylist;
}
console.log(techList(['React', 'Javascript', 'CSS', 'Ruby'], 'Luiz'));
// Desafio 11

function generatePhoneNumber(number) {
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let accountant = 0; accountant < number.length; accountant += 1) {
    let counter = 0;
    if ((number[accountant] < 0) || (number[accountant] > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let value of number) {
      if (number[accountant] === value) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${number[0]}${number[1]}) ${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}-${number[7]}${number[8]}${number[9]}${number[10]}`;
}
console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let AB = lineA + lineB;
  let ABdif = Math.abs (lineA - lineB);
  let BC = lineB + lineC;
  let BCdif = Math.abs (lineA - lineB);
  let CA = lineA + lineC;
  let ACdif = Math.abs (lineA - lineB);
  let result = false;
  if (lineA < BC && lineB < CA && lineC < AB && lineA > BCdif && lineB > ACdif && lineC > ABdif){
    result = true
  }
  return result
}
console.log(triangleCheck(10, 140, 8));
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
