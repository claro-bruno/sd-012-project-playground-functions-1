// Desafio 10

let testArray = ["React", "Jest", "HTML", "CSS", "JavaScript"];
testArray.sort();

function techList(arrayTech, name) {
  let arrayObjetos = [];
  for (let index in arrayTech) {
    arrayObjetos.push({
    tech: arrayTech[index],
    name: name
    });
  };

  if (arrayObjetos == 0) {
    return 'Vazio!';
  } else {
    return arrayObjetos;
  };
};

console.log(techList(testArray, 'Adriana'));

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
