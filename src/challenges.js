// Desafio 1
function compareTrue(estaDeNoite, estouComSono) {
  if (estaDeNoite && estouComSono === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base*height)/2;
  return result;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}
// Desafio 4
let array = [];
function concatName(array) {
    let primeiroItem = array[array.length -1];
    let ultimoItem = array[0]
  return `${primeiroItem}, ${ultimoItem}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins*3) + ties)
  return points
}

// Desafio 6
let array2 = [1, 2, 3, 4, 9, 7, 8, 9, 2]
function highestCount(array2) {
  let contador = 0
  array2.sort()
  for (let index = 0; index < array2.length; index += 1) {
    if (array2[index] === array2[array2.length -1]) {
      contador +=1
    }
  }
  return contador
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  switch (mouse,cat1,cat2) {
    case mouse <= cat1 && mouse <= cat2 && (cat1 - mouse) > (cat2 - mouse) :
      return 'cat2';
      break;
      case mouse >= cat1 && mouse <= cat2 && (mouse - cat1) > (cat2 - mouse) :
        return 'cat2';
        break;
        case mouse >= cat1 && mouse >= cat2 && (mouse - cat1) > (mouse - cat2) :
          return 'cat2';
          break;
          case mouse <= cat1 && mouse >= cat2 && (cat1 - mouse) > (mouse - cat2) :
            return 'cat2';
            break;
          case mouse <= cat1 && mouse <= cat2 && (cat1 - mouse) < (cat2 - mouse) :
            return 'cat1';
            break;
            case mouse >= cat1 && mouse <= cat2 && (mouse - cat1) < (cat2 - mouse) :
              return 'cat1'
              break;
              case mouse >= cat1 && mouse >= cat2 && (mouse - cat1) < (mouse - cat2) :
                return 'cat1';
                break;
                case mouse <= cat1 && mouse >= cat2 && (cat1 - mouse) < (mouse - cat2) :
                return 'cat1';
                break;
                default : return 'os gatos trombam e o rato foge'
                
  }
}
// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  for (let indexFizzBuzz = 0; indexFizzBuzz < arrayFizzBuzz.length; indexFizzBuzz += 1) {
    if (arrayFizzBuzz[indexFizzBuzz] % 3 === 0 && arrayFizzBuzz[indexFizzBuzz] % 5 !==0) {
      arrayFizzBuzz[indexFizzBuzz] = 'fizz';
    } else if (arrayFizzBuzz[indexFizzBuzz] % 3 !== 0 && arrayFizzBuzz[indexFizzBuzz] % 5 === 0) {
      arrayFizzBuzz[indexFizzBuzz] = 'buzz'
    } else if (arrayFizzBuzz[indexFizzBuzz] % 3 === 0 && arrayFizzBuzz[indexFizzBuzz] % 5 === 0) {
      arrayFizzBuzz[indexFizzBuzz] = 'fizzBuzz';
    } else {
      arrayFizzBuzz[indexFizzBuzz] = 'bug!';
    }
  }
  return arrayFizzBuzz 
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
