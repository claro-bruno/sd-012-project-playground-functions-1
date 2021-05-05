// Desafio 10
function techList(listaTec, nome) {
  // seu código aqui
  let objeto = [];
  let lista = {};
  
  if (listaTec.length === 0) {
    return 'Vazio!';
  } else {
    for (let varIni = 0; varIni < listaTec.length; varIni += 1) {
      lista = {
        tech: listaTec[varIni],
        name: nome,
      };
      objeto.push(lista);
    }
  }
  return objeto.sort();
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12 - Parte 1
function isTriangulo1(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;
}

// Desafio 12 - Parte 2
function isTriangulo2(lineA1, lineB1, lineC1) {
  // seu código aqui
  let vv = lineA1 > Math.abs(lineB1 - lineC1) && lineB1 > Math.abs(lineA1 - lineC1);
  return vv && lineC1 > Math.abs(lineA1 - lineB1);
}

// Desafio 12 - Parte 3
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let resultado = (isTriangulo1(lineA, lineB, lineC) && isTriangulo2(lineA, lineB, lineC));
  return resultado;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let con = 0;
  for (let indice = 0; indice < string.length; indice += 1) {
    if (parseInt(string[indice])) {
      con += parseInt(string[indice]);
    }
  }
  return con > 1 ? con + ' copos de água' : con + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
