// Desafio 10
function techList(name, tec) {
  let array = [];
  let list = {}
  if( tec.length ===0) {
    return 'Vazio!';
  } else {
    for (let key in tec.sort()){
      list = {
        tec: tec[key],
        name : name,
};
    array.push(list);
}
   }
   } return array

  // seu código aqui parametro e um array (nomes de tecnologia) usar o .sort if length ===0  = null return null }

// Desafio 11
function generatePhoneNumber(numerostelefone) {
  let maxnumeros = 11;
  for (let index = 0; index < numerostelefone.length; index +=1)
  if (numerostelefone.length < maxnumeros || numerostelefone.length > maxnumeros) {
    return "nao e possivel gerar um numero de telefone com esses valores.";
  }
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
