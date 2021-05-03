// Desafio 10
/** Consultei o repositório do Jossany Moura para resolver essa parte.
Link do repositório: https://github.com/tryber/sd-012-project-playground-functions/pull/45/commits/d5881230ba053d4f0f5565c6d1a35f917fdd4e11
*/
function techList(array7, name) {
  let novaArray = [];

  for (let indiceDaArray7 = 0; indiceDaArray7 < array7.length; indiceDaArray7 += 1) {
    let saidaFuncao = {
      tech: array7[indiceDaArray7],
      nome: name,
    };
    novaArray.push(saidaFuncao);
    if (array7.length === 0) {
      novaArray = 'Vazio!';
    }
  }
  return novaArray;
}

// techList('Eder', ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'])
// teste
// console.log(novaArray);

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
