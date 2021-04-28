// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  let alfabetica = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    for (let language in alfabetica){
      array.push ({
        tech: alfabetica[language],
        name: name
      });
    };
    return array;
  }; 
};

// Desafio 11
function generatePhoneNumber(PhoneNumber) {
  // seu código aqui
  if (PhoneNumber.length != 11){
    return "Array com tamanho incorreto."
  } else {
    for (let number in PhoneNumber) {
      if (PhoneNumber[number] < 0 || PhoneNumber[number] > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      };
      let contador = 0;
      for (let number2 in PhoneNumber){
        if (PhoneNumber[number] === PhoneNumber[number2]){
          contador += 1
        }
        if (contador > 2){
          return "não é possível gerar um número de telefone com esses valores"
        };
      };
    };
    return '(' + PhoneNumber[0] + PhoneNumber[1] + ') ' + PhoneNumber[2] + PhoneNumber[3] + PhoneNumber[4] + PhoneNumber[5] + PhoneNumber[6] + '-' + PhoneNumber[7] + PhoneNumber[8] + PhoneNumber[9] + PhoneNumber[10]
  };
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  triangle = true;
  if (lineA < Math.abs(lineB - lineC) && (lineA > lineB + lineC)){
    triangle = false
  } else if (lineB < Math.abs(lineA - lineC) && (lineB > lineA + lineC)){
    triangle = false
  } else if ((lineC < Math.abs(lineB - lineA) && (lineC > lineB + lineA))){
    triangle = false
  };
  return triangle;
};



// Desafio 13
function hydrate(string) {
  // seu código aqui
  let arrayNumeros = (string.match(/\d+/g));
  let numeros = [];
  for (numero in arrayNumeros) {
    numeros.push(parseInt(arrayNumeros[numero]))
  }
  soma = 0;
  for (let numero in numeros) {
    soma += numeros[numero]
  }
  if (soma === 1){
    return soma + ' copo de água'
  } else {
    return soma + ' copos de água'
  };
};

// console.log(hydrate("1 cachaça"))

// let s = "1 banana + 1 pineapple + 3 oranges";
// let result = (s.match(/\d+/g));
// let numeros = []
// for (index in result){
//   numeros.push(parseInt(result[index]))
// }
// console.log(result);
// console.log(numeros)

// Função de retirar números de uma string encontrado em https://stackoverflow.com/questions/42532450/extract-number-from-string-javascript

// const s = "1 banana + 1 pineapple + 3 oranges";
// const result = (s.match(/\d+/g) || []).map(n => parseInt(n));

// console.log(result);

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};


