// Desafio 10
function techList(lista, nome) {
  let retorno;
  let listaObjetos = [];
  if (lista.length > 0) {
    for (let key in lista.sort()) {
      let objeto = {
        tech: lista[key],
        name: nome,
      };
      listaObjetos.push(objeto);
    }
    retorno = listaObjetos;
  } else {
    retorno = 'Vazio!';
  }
  return retorno;
}

// Desafio 11
function checkNumbers(numbers){
  let retorno = 0;
  let contador = 0;
  if (numbers.length === 11) {
    if (numbers[key > 9 || numbers[key] < 0]) {
      return 1;
    }
    for (key in numbers) {
      for (key2 in numbers) {
        if (numbers[key] === numbers[key2]) {
          contador += 1;
          if (contador >= 2) {
            return 1;
          }
        }
      }
      contador = 0;
    }
  } else {
    return 2;
  }
  return retorno;
}

function generatePhoneNumber(array) {
  let variavel = checkNumbers(array);
  if (variavel === 1) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (variavel === 2) {
    return 'Array com tamanho incorreto.';
  } else {
    return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  }
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
function triangleCheck(lineA, lineB, lineC) {
  let difA = (lineB - lineC)
  let difB = (lineA - lineC)
  let difC = (lineB - lineA)
  if (Math.abs(lineA) > Math.abs(difA)) {
    if (lineA < (lineB + lineC)){
      return true
    }
  } else if (Math.abs(lineB) > Math.abs(difB)) {
    if (lineB < (lineA + lineC)) {
      return true
    }
  } else if (Math.abs(lineC) > Math.abs(difC)) {
    if (lineC < (lineB + lineA)) {
      return true
    }
  }
  return false
}

// Desafio 13
function hydrate() {
  // seu código aqui
function hydrate(hydrate) {
  let regRule = /\d+/g;
  let arrayHydrate = hydrate.match(regRule);
  let quantia = 0;
  let result = ''
  for (let key in arrayHydrate) {
    quantia += parseInt(arrayHydrate[key])
  } if (quantia === 1){
    result = `${quantia} copo de água`;
  } else {
    result = `${quantia} copos de água`
  }
  return result;
}

module.exports = {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = [];
  let ret;
  if (lineA <= lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    check.push(true);
  } 
  else {
    check.push(false);
  }
  if (lineB <= lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    check.push(true);
  } 
  else {
    check.push(false);
  }
  if (lineC <= lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    check.push(true);
  } else {
    check.push(false);
  }
  if (check[0] && check[1] && check[2]) {
    ret = true;
  } else {
    ret = false;
  }
  return ret;
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