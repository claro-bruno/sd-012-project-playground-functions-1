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
  return stackName;
}
//console.table(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));


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
