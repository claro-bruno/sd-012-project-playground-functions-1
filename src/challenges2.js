// Desafio 10
function techList(arrayTecnologias, name ) {
  if (arrayTecnologias.length === 0){
    return 'Vazio!';
  }
  let arrayTecnologiaOrdenado = arrayTecnologias.sort();
  let lista = [];
  for(let index = 0; index < arrayTecnologiaOrdenado.length; index += 1) {
      let objeto = {
        tech: arrayTecnologiaOrdenado[index],
        name: name,
      }
      lista.push(objeto);
    } return lista; 
} console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Patricia'));

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
