// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  
  let listAnswer = [];

  arrayTech = arrayTech.sort();

  for (let key in arrayTech){
    let objects = {
      tech: arrayTech[key],
      name: name
    };
    listAnswer.push(objects);
  };
  if (arrayTech.length === 0) {
    return 'Vazio!'
  } else {  
    return listAnswer;
  }
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  // seu código aqui

  let ddd = '';
  let prefixo = '';
  let sufixo = '';

  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';  
  }

  for (let index = 0; index < arrayPhone.length; index += 1) {
    
    let equal = 0;
    for (let index2 = 0; index2 < arrayPhone.length; index2 += 1) {
      if (arrayPhone[index] === arrayPhone[index2]) {
        equal += 1;
      }
    }
    if (equal > 2 || arrayPhone[index] < 0 || arrayPhone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      if (index < 2) {
        ddd = ddd + arrayPhone[index];
      } else if (index >= 2 && index <= 6) {
        prefixo = prefixo + arrayPhone[index];
      } else {
        sufixo = sufixo + arrayPhone[index];
      }
    }
  }
  let phoneNumber = `(${ddd}) ${prefixo}-${sufixo}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

  let triangle = true;

  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    triangle = false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    triangle = false;
  } else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    triangle = false;
  };
  return triangle;
}

// Desafio 13
function hydrate(stringBebidas) {
  // seu código aqui

  let copos = 0;

  let arrayBebidas = stringBebidas.split('');

  for (let index3 = 0; index3 < arrayBebidas.length; index3 += 1) {
    switch (arrayBebidas[index3]) {
      case '1':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '2':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '3':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '4':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '5':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '6':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '7':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '8':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
      case '9':
        copos = copos + parseInt(arrayBebidas[index3]);
        break;
    };
  };

  if (copos === 1) { 
    return copos + ' copo de água'
  } else if (copos > 1) {
    return copos + ' copos de água'
  };
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
