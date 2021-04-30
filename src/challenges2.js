// Desafio 10
function techList(techs, name) {
  if (techs.length === 0) {
    return 'vazio!';
  };
  let outputArray = [];
  for (let index = 0; index < techs.length; index += 1) {
    outputArray.push(new Object());
    outputArray[index].tech = techs[index];
    outputArray[index].name = name;
  }
  //  essa parte de ordenar foi feita lendo os seguintes artigos:
  //  https://reactgo.com/javascript-sort-objects-alphabetically/
  //  https://www.w3docs.com/snippets/javascript/how-to-sort-array-alphabetically-in-javascript.html

  let sortedOutputArray = outputArray.sort (function(a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.tech > b.tech) {
      return 1;
    }
    return 0;
  });

  return sortedOutputArray;
}
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
