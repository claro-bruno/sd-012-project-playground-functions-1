// Desafio 10

function techList(array, name) {
  
  let objectArray=[];

  if (array.length < 0) {
    return 'Vazio!';
  }
  else {
    for (let index = 0; index <array.length; index +=1){
      let object = {};
      object.tech = array[index];
      object.name = name;
      objectArray.push(object);
    }
  }
  //Credito:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  objectArray.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return objectArray;
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
