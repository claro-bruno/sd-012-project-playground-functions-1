// Desafio 10
function techList(arr, name) {

  let result = []
  arr.forEach(element => {
    function CreateObj(element, name) {
      return {
        tech: element,
        name: name
      }
    }

    const obj = CreateObj(element, name);

    result.push(obj);
  });

  return result;
}

const tecnologias = ["React", "Jest", "HTML", "CSS", "JavaScript"];
console.log(techList(tecnologias, 'Lucas'));


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
