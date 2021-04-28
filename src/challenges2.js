// Desafio 10
function techList(array, string) {
  // seu código aqui
  let habilidade = {};
  let habilidades = [];
  if (array.length === 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      habilidade.tech = array[index];
      habilidade.name = string;
      habilidades.push(habilidade);
      habilidade = {};
    }
    return habilidades;
  }
}
console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {}
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
