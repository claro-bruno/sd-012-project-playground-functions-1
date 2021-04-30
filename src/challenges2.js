// Desafio 10
function techList(array = [], nome) {
  // seu código aqui
  if (!array.length) return 'Vazio!';
  let arrayFinal = [];
  for (let i = 0; i < array.length; i += 1) {
    let pull = {
      tech: array[i],
      name: nome,
    };
    arrayFinal.push(pull);
  }
  return arrayFinal;
}

// Desafio 11
function repetiuNumero(numero, array) {
  let valor = 0;
  for (let numeros = 0; numeros < array.length; numeros += 1) {
    if (numero === array[numeros]) {
      valor += 1;
    }
  }
  return valor;
}
function vezesRepetido(array) {
  let picoRepeticoes = 0;
  for (let i = 0; i < array.length; i += 1) {
    let pico = repetiuNumero(array[i], array);
    if (pico > picoRepeticoes) picoRepeticoes = pico;
  }
  return picoRepeticoes;
}

function errorPhoneNumber(array) {
  let msgError = 'Não é possível gerar um número de telefone com esses valores';
  if (array.length !== 11) return 'array com tamanho incorreto';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) return msgError;
  }
  return false;
}
function DDD(num1, num2) {
  return `(${num1}${num2})`;
}
function Numeros(array) {
  let str = '';
  for (let i = 2; i < array.length; i += 1) {
    if (i === 6) {
      str += `${array[i]}-`;
    } else {
      str += array[i];
    }
  }
  return str;
}

function generatePhoneNumber(array = []) {
  // seu código aqui
  let error = errorPhoneNumber(array);
  let str = '';
  let errorMsg = 'Não é possível gerar um número de telefone com esses valores';
  if (vezesRepetido(array) >= 3) return errorMsg;
  if (error === false) {
    str = Numeros(array);
  } else {
    return error;
  }
  return `${DDD(array[0], array[1])} ${str}`;
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
