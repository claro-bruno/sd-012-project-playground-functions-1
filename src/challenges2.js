// Desafio 10
function techList(array, nome) {
  let total = [];
  let objetos = {};
  let tamanho = array.length;
  if (array == "") {
    return "Vazio!";
  } else {
    for (let index = 0; index < tamanho; index += 1) {
      objetos.tech = array[index];
      objetos.name = nome;
      total.push(objetos);
      objetos = {};
    };
  };
  total.sort((a, b) => {
    if (a.tech > b.tech) {
      return 1;
    }
    else {
      return -1;
    }
  });
  return total;
};
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
