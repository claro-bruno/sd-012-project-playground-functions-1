// Desafio 10

function techList(array, name) {
  let result;

  if (array.length > 0) {

    let arrayDeObjeto = [];
    let arrayOrdenado = array.sort();

      for (let key in array) {
        const object = { 
          tech: arrayOrdenado[key],
          name: name
        };

        arrayDeObjeto.push(object);
      };

    result = arrayDeObjeto;

  } else {
    result = "Vazio!"
  };

  return result;
};

// Desafio 11

function generatePhoneNumber(array) {
  let result;
  let verificacao = false;

  for (let index = 0; index < array.length; index += 1) {

    switch (true) {
      case (array[index] < 0 || array[index] > 9):
        verificacao = true;
        break;
    };

    let qtdeDeRepeticoes = 0;

    for (let index2 = 0; index2 < array.length; index2 += 1){

      if (array[index] === array[index2]){
        qtdeDeRepeticoes += 1;
      };

      if(qtdeDeRepeticoes >=3) {
        verificacao = true;
      };
    };
  };

  if (array.length !== 11) {
    result = "Array com tamanho incorreto."
  } else if (verificacao === true) {
    result = "não é possível gerar um número de telefone com esses valores"
  } else {
    let phoneNumber = "(";

    for (let index = 0; index < 2; index += 1) {
      phoneNumber += array[index];
    };
  
    phoneNumber += ") ";
  
    for (let index = 2; index < 7; index += 1) {
      phoneNumber += array[index];
    };
  
    phoneNumber += "-";
  
    for (let index = 7; index < 11; index += 1) {
      phoneNumber += array[index];
    };
  
    result = phoneNumber;
  };

  return result;
};

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let verificacao = false;

  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))){
    if ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
      if ((lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA))) {
        verificacao = true;
      };
    };
  };

  return verificacao;
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
