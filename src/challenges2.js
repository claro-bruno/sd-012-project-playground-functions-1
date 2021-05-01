// Desafio 10
function techList(array, name) {
  array.sort();
  let juncao = [];
  if (array.length == 0){
    return "Vazio!";
  }
  for (let index in array) {
  let objetoCoisas = {
      tech: array[index],
      name: name,
    };
juncao.push(objetoCoisas);
  }
  return juncao;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"))
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
let eTringulo = false;

function triangleCheck(lineA, lineB, lineC) {
  let somaLados = Math.abs(lineA + lineB + lineC);
if (lineA > somaLados || lineB > somaLados || lineC > somaLados){
  eTringulo = false;
} else if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)){
  eTringulo = true;
} else {
  eTringulo = false;

}
return eTringulo;
}

// Desafio 13
function hydrate(string) {
let somaNum = 0;
let numeros = /\d+/g;
let resultado = string.match(numeros);
  for (let index = 0; index < resultado.length; index += 1){
    somaNum += parseInt(resultado[index]);
  };
  if (somaNum !== 1){
    return (somaNum + " copos de água");
  } else {
    return (somaNum + " copo de água")
  };

}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
