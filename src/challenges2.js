// Desafio 10
function techList(arr, name) {

  let result = [];
  arr = arr.sort();
  if (arr.length == 0) {
    return 'Vazio!';
  };

  arr.forEach(element => {
    function CreateObj(element, name) {
      return {
        tech: element,
        name: name
      }
    }

    const obj = new CreateObj(element, name);

    result.push(obj);
  });

  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < (lineB + lineC)) && lineA > (Math.abs(lineB - lineC));
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
