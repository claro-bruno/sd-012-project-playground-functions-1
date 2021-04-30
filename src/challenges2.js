// Desafio 10
function techList(tech, name) {
  let resultado = []
  let lista = {};
  let listaOrdenada = tech.sort();
  if(tech.length === 0) {
    return 'Vazio!'
  } else {
    for(let key in listaOrdenada) {
      lista = {
        tech: tech[key],
        name: name,
      }
      resultado.push(lista);
    }
  }
  return resultado;
}
console.log(techList([], 'Lucas'));



// Desafio 11
function generatePhoneNumber(arrayOnzeNumeros) {
  let numeroTelefonico = '(';
  for(let key in arrayOnzeNumeros) {
    switch(arrayOnzeNumeros[key]) {
      case (arrayOnzeNumeros[1]):
        numeroTelefonico += arrayOnzeNumeros[key] + ')';
        break;
      case (arrayOnzeNumeros[6]):
        numeroTelefonico += arrayOnzeNumeros[key] + '-';
        break;
      default:
        numeroTelefonico += arrayOnzeNumeros[key];
        break;
      }
  }
  return numeroTelefonico;
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
