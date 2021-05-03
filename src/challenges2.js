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
function generatePhoneNumber(array) {
  let final;
  if (array.length == 11) {
    for (let n = 0; n > array.length; n += 1) {

    }
  } else {
    final = 'Array com tamanho incorreto.';
  }
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
  if (check[0] == true && check[1] == true && check[2] == true) {
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

