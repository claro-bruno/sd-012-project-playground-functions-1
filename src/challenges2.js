// Desafio 10
function techList(tec, name) {
  let array = [];
  let listaOrdenada = tec.sort();
    for (let index = 0; index<listaOrdenada.length; index +=1 ){
  let tecnologia = {
      technologia : tec[index],
      nome : name,
    }
  }
    if (listaOrdenada === 0){
    return null
    } else {
      array.push
    }
  
}
  // seu código aqui parametro e um array (nomes de tecnologia) usar o .sort if vier = null return null }

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function checkTriangle(linha1, linha2, linha3) {
  let verify = false;
  if ((linha1 < Math.abs(linha2 + linha3)) && (linha1 > Math.abs(linha2 - linha3))) {
    verify = true;
  }
  return verify;
}
function triangleCheck(lineA, lineB, lineC) {
  let booleano = false;
  let A = checkTriangle(lineA, lineB, lineC);
  let B = checkTriangle(lineB, lineC, lineA);
  let C = checkTriangle(lineC, lineA, lineB);
  if (A && B && C) {
    booleano = true;
  }
  return booleano;
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
