// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let alfabetica = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    for (let language in alfabetica){
      array.push ({
        tech: alfabetica[language],
        name: name
      });
    };
    return array;
  }; 
};

// Desafio 11
function generatePhoneNumber(PhoneNumber) {
  // seu código aqui
  if (PhoneNumber.length != 11){
    return "Array com tamanho incorreto."
  } else {
    for (let number in PhoneNumber) {
      if (PhoneNumber[number] < 0 || PhoneNumber[number] > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      };
      let contador = 0;
      for (let number2 in PhoneNumber){
        if (PhoneNumber[number] === PhoneNumber[number2]){
          contador += 1
        }
        if (contador > 2){
          return "não é possível gerar um número de telefone com esses valores"
        };
      };
    };
    return '(' + PhoneNumber[0] + PhoneNumber[1] + ') ' + PhoneNumber[2] + PhoneNumber[3] + PhoneNumber[4] + PhoneNumber[5] + PhoneNumber[6] + '-' + PhoneNumber[7] + PhoneNumber[8] + PhoneNumber[9] + PhoneNumber[10]
  };
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  triangle = true;
  if (lineA < Math.abs(lineB - lineC) || (lineA > lineB + lineC)){
    triangle = false
  } else if (lineB < Math.abs(lineA - lineC) || (lineB > lineA + lineC)){
    triangle = false
  } else if ((lineC < Math.abs(lineB - lineA) || (lineC > lineB + lineA))){
    triangle = false
  };
  return triangle;
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
