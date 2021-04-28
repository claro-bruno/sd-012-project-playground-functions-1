// Desafio 10
function techList(array, nome) {
  let obj =[];
let arrayOrdenado=array.sort()
  if (arrayOrdenado.length >= 0) {
    for (let i = 0; i < arrayOrdenado.length; i += 1) {
      obj[i] = { tech: arrayOrdenado[i], name: nome };
    }
    return obj;
  } else {
    return 'vazio';
  }
}



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
