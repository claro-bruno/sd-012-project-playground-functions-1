// Desafio 1
function compareTrue(booleano1, booleano2) {
	let compare = true;
	if (booleano1 === true && booleano2 === true) {
		compare = true;
  	} else {
    	compare = false;
  	}
  	return compare;
}

// Desafio 2
function calcArea(base, height) {
	let area = (base * height) / 2;
  	return area;
}

// Desafio 3
function splitSentence(string) {
	let splitString = string.split(' ');
  	return splitString;
}

// Desafio 4
function concatName(arrayString) {
	let first = arrayString[arrayString.length - 1];
	let second = arrayString[0];
	let concatString = first + ', ' + second;
	return concatString;
}

// Desafio 5
function footballPoints(wins, ties) {
	let pointsWins = 3 * wins;
	let pointsTies = 1 * ties;
	let points = pointsWins + pointsTies;
	return points;
}

// Desafio 6
function highestCount(arrayNumbers) {
	let maior = 0;
	let contaNum = 0;
	for (let index = 0; index < arrayNumbers.length; index += 1) {
    	if (arrayNumbers[index] > maior) {
      	maior = arrayNumbers[index];
    	}
	}
  	for (let numero in arrayNumbers) {
    	if (arrayNumbers[numero] === maior) {
      	contaNum += 1;
    	}
  	}
  	return contaNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
	let distanciaCat1 = Math.abs(cat1 - mouse);
	let distanciaCat2 = Math.abs(cat2 - mouse);
	if (distanciaCat1 === distanciaCat2) {
		return 'os gatos trombam e o rato foge';
	}
	if (distanciaCat1 < distanciaCat2) {
		return 'cat1';
	} else {
		return 'cat2';
	}
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayFinal = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if ((arrayNumeros[index] % 3) == 0 && (arrayNumeros[index] % 5) != 0){
      arrayFinal.push("fizz");
    }
    if ((arrayNumeros[index] % 5) == 0 && (arrayNumeros[index] % 3) != 0){
      arrayFinal.push('buzz');
    }
    if ((arrayNumeros[index] % 3) == 0 && (arrayNumeros[index] % 5) == 0) {
      arrayFinal.push('fizzBuzz');
    }
    if ((arrayNumeros[index] % 3) != 0 && (arrayNumeros[index] % 5) != 0) {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
}

// Desafio 9
function encode() {
  // seu código aqui
}

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
