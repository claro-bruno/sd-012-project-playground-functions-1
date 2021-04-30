// Desafio 10
function techList(array, name) {  
  let listaTech = [];
  if (array.length > 0) {
    let ordemArray = array.sort();
      for (let index = 0; index < ordemArray.length; index += 1) {
        listaTech[index] = {tech: ordemArray[index], name: name};
      }; 
    } else {
      return "Vazio!";
  };
  return listaTech;
};

// Desafio 11
function generatePhoneNumber(array) {
  let arrayOriginal = [];
  arrayOriginal = array.slice();
  if (array.length !== 11) {
      return "Array com tamanho incorreto.";
  } else {
      let ordemArray = array.sort();
      let numeroRepetido = ordemArray[0];
      let repetidoNumber = [];
      for (let index = 0; index < ordemArray.length; index += 1) {      
        if (ordemArray[index] < 0 || ordemArray[index] > 9) {
          return "não é possível gerar um número de telefone com esses valores";
        } else if (ordemArray[index] === numeroRepetido) {
          repetidoNumber.push(numeroRepetido);
          if (repetidoNumber.length >= 2) {
            return "não é possível gerar um número de telefone com esses valores";
          };
        } else if (ordemArray[index] !== numeroRepetido) {
          repetidoNumber = [];
        };
      };      
  };  
  return "(" + arrayOriginal[0] + arrayOriginal[1] + ") " + arrayOriginal[2] + arrayOriginal[3] + arrayOriginal[4] + arrayOriginal[5] + arrayOriginal[6] + "-" + arrayOriginal[7] + arrayOriginal[8] + arrayOriginal[9] + arrayOriginal[10];  
};
console.log(generatePhoneNumber([1, 2, 2, 2, 5, 6, 7, 8, 2, 0, 1]))


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
