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
      let numeroRepetido = -1;
      let repetidoNumber = [];
      for (let index = 0; index < ordemArray.length; index += 1) {      
        if (ordemArray[index] < 0 || ordemArray[index] > 9) {
          return "não é possível gerar um número de telefone com esses valores";
        };
        if (ordemArray[index] === numeroRepetido) {
          repetidoNumber.push(ordemArray[index]);                   
        } else if (ordemArray[index] !== numeroRepetido) {
          repetidoNumber = [];
          numeroRepetido = ordemArray[index]
        };
        if (repetidoNumber.length >= 2) {
          return "não é possível gerar um número de telefone com esses valores";
        };
      };      
  };  
  return "(" + arrayOriginal[0] + arrayOriginal[1] + ") " + arrayOriginal[2] + arrayOriginal[3] + arrayOriginal[4] + arrayOriginal[5] + arrayOriginal[6] + "-" + arrayOriginal[7] + arrayOriginal[8] + arrayOriginal[9] + arrayOriginal[10];  
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineBC = lineB - lineC;
  let lineAC = lineA - lineC;
  let lineAB = lineA - lineB;
  if ((lineA < (lineB + lineC) && lineA > Math.abs(lineBC)) || (lineB < (lineA + lineC) && lineB > Math.abs(lineAC)) || (lineC < (lineA + lineB) && lineC > Math.abs(lineAB))) {
    return true;
  } else {
    return false;
  };  
};

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
