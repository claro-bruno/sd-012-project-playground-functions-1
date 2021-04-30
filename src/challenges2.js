// Desafio 10
// let array10 = ["React", "Jest", "HTML", "CSS", "JavaScript"];
function techList(techPraAprender, name) {
  let arraySaida = [];
  let techListLearn = {};
  techPraAprender.sort();
  if (techPraAprender.length !== 0) {
    for (let key in techPraAprender) {
      techListLearn = {
        tech: techPraAprender[key],
        name: name} ;
      arraySaida.push(techListLearn);
    }
    return arraySaida;
  }
  return 'Vazio!';
}
// console.log(techList(array10, "Lucas"));
// Desafio 11
let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9];
function generatePhoneNumber(arrayNumber) {
  let foneNumber = '(';
  for (let key in arrayNumber) {
    if (arrayNumber.length !== 11) {
      return "Array com tamanho incorreto.";
    } else if (arrayNumber[key] < 0 || arrayNumber[key] > 9) { // faltando se repetir mais de 3 vezes
      return "não é possível gerar um número de telefone com esses valores"; //  (stringAqui[key] === 'e') 
    } else if (key < 1 ) {
      foneNumber += arrayNumber[key];
    } else if (key == 1){
      foneNumber += arrayNumber[key] + ') ';
    } else if ( key >= 2 && key < 7 ) {
      foneNumber += arrayNumber[key];
    } else if ( key == 7){
      foneNumber += '-' + arrayNumber[key];
    } else if (key >7) {
      foneNumber += arrayNumber[key];
    }

  }
  return foneNumber;
}
console.log(generatePhoneNumber(array11));
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
