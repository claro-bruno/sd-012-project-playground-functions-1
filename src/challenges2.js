//funções auxiliares para o desafio 11:

const checkRepetedNumbers = (arr) => {
  let result = 'ok';
  for (let j = 0; j < arr.length; j++) {
    let repetition = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[j] == arr[i]) {
        repetition++;
        if (repetition >= 3) {
          result = 'não é possível gerar um número de telefone com esses valores';
          break;
        }
      }
    }
    if (result === 'não é possível gerar um número de telefone com esses valores') {
      break;
    }
  }

  return result;
}


const checkNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

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
function generatePhoneNumber(numberArr) {

  if (numberArr.length != 11) {
    return 'Array com tamanho incorreto.';
  } else if (checkNumber(numberArr)) {
    return (checkNumber(numberArr));
  } else if (checkRepetedNumbers(numberArr) != 'ok') {
    return checkRepetedNumbers(numberArr);
  } else {
    numberArr.unshift('(');
    numberArr.splice(3, 0, ')');
    numberArr.splice(4, 0, ' ')
    numberArr.splice(10, 0, '-');
    return numberArr.join('');
  }

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
