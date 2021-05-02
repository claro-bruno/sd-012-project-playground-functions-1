// Desafio 10
function techList(stack, person) {
  let stackName = [];
  stack.sort();
  for (let index = 0; index < stack.length; index += 1) {
    stackName.push({
      tech: stack[index],
      name: person
    });
  }
  if (stackName >= 0) {
    return 'Vazio!'
  } else {
    return stackName;
  }
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
//console.log(techList([]));

// Desafio 11
function generatePhoneNumber(cpf) {
  cpfFormat = "(xx) xxxxx-xxxx";

  for (let index = 0; index > cpf.length; index += 1) {
    if (cpf[index] < 0 || cpf[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  count = 0;
  for (let index in cpf) {
    for (let index2 in cpf) {
      if (cpf[index] === cpf[index2]) {
        count += 1;
      }
    }
    if (count > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    count = 0;
  }
  for (let index = 0; index < cpf.length; index += 1) {
    cpfFormat = cpfFormat.replace('x', cpf[index]);
  }
  if (cpf.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  return cpfFormat;
}

console.log(generatePhoneNumber([1, 2, 3, 2, 4, 3, 6, 7, 8, 9, 7]));


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
