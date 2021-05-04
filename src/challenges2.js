// Desafio 10
function techList() {
  // seu código aqui
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
  /*let lineA1 = lineA;
  let lineB1 = lineB;
  let lineC1 = lineC;*/
  let resultado = (isTriangulo1(lineA, lineB, lineC) && isTriangulo2(lineA, lineB, lineC));
  if (resultado) {
    console.log(true);
  } else {
    console.log(false;
  }
  return resultado;
}
console.log(triangleCheck(16, 20, 30));
// Desafio 13
function hydrate(string) {
  // seu código aqui
  let con = 0;
  for (let indice = 0; indice < string.length; indice += 1) {
    if (parseInt(string[indice])) {
      con += parseInt(string[indice]);
    }
  }
  return con;
}
//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
