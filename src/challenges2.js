// Desafio 10
let listaTeste = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nameTeste = "Lucas";

function techList(tech, name) {
  var listaObjetos = {};
  for (let key in tech) {
    if (tech[key] === null) {
      console.log('Vazio!')
    } else {
      listaObjetos.tech = tech[key];
      listaObjetos.name = name;
      console.log(listaObjetos);
    };
 }
}

console.log(techList(listaTeste, nameTeste));

// Desafio 11

let parametroTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

function generatePhoneNumber(number) {
  let numeroGerado = [];
  if (number.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < 11; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
      break;
    }
    numeroGerado += number[index];
  }
  let numeroArray = numeroGerado.split('');
  let countNumRep = 0;
 //PARTE_AINDA_NAO_FUNCIONANDO for (let i = 0; i < numeroArray.length; i += 1){
//   let num = numeroArray[i];
 //   counts[]
 // }
  console.log(countNumRep);
  if (countNumRep >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  } else {return'(' + numeroArray[0] + numeroArray[1] + ') ' + numeroArray[2] + numeroArray[3] + numeroArray[4] + numeroArray [5] + numeroArray [6] + '-' + numeroArray[7] + numeroArray[8] + numeroArray[9] + numeroArray[10]}
}
console.log(generatePhoneNumber(parametroTeste))

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
