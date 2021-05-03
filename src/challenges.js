// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  let contador = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 > 0 && distanciaCat2 > 0) {
    if (cat1 < mouse && distanciaCat2 > distanciaCat1) {
      return 'cat1';
    } else if (cat2 < mouse && distanciaCat1 > distanciaCat2) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let novoArray = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if(arrayDeNumeros[index] % 3 === 0 ){
      let divisivelPor = [3]
      for (let divisor = 2; divisor < arrayDeNumeros[index]; divisor += 1){
        if (arrayDeNumeros[index] % divisor === 0 && divisor != 3) {
          divisivelPor.push(divisor)
        }
      } 
      if (divisivelPor.length === 1) {
        novoArray.push('fizz')
      }
    }  
    if(arrayDeNumeros[index] % 5 === 0 ){
      let divisivelPor = [5]
      for (let divisor = 2; divisor < arrayDeNumeros[index]; divisor += 1){
        if (arrayDeNumeros[index] % divisor === 0 && divisor != 5) {
          divisivelPor.push(divisor)
        }
      } 
      if (divisivelPor.length === 1) {
        novoArray.push('buzz')
      }
    }
    if (arrayDeNumeros[index] % 3 === 0 && arrayDeNumeros[index] % 5 === 0) {
      novoArray.push('fizzBuzz')
    }
    if (arrayDeNumeros[index] % 3 != 0 && arrayDeNumeros[index] % 5 != 0) {
      novoArray.push('bug!')
    }
  }
  return novoArray
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
