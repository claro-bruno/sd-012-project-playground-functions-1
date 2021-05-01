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
function repeteMais3x(arraycheck) {
  let contador = 0;
  let contador2 = 0;
  for (let key1 in arraycheck) {
    contador = 0;
    for (let key2 in arraycheck) {
      if (arraycheck[key2] === arraycheck[key1]) {
        contador +=1;
      }
      if (contador > contador2){
        contador2 = contador;
      }
    }
  }
  return contador;
}
let array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(arrayNumber) {
  //let foneNumber = '(';
  for (let key in arrayNumber) {
    if (arrayNumber.length !== 11) {
      return 'Array com tamanho incorreto.';
    } else if (arrayNumber[key] < 0 || arrayNumber[key] > 9 || repeteMais3x(arrayNumber) >= 3) {
      return 'não é possível gerar um número de arrayNumber com esses valores';
    }/*else if (key < 1) {
      //foneNumber += arrayNumber[key];
      foneNumber = foneNumber.concat(arrayNumber[key])
    } else if (key == 1) {
      foneNumber = `${foneNumber}${arrayNumber[key]}) `;
      //foneNumber += arrayNumber[key] + ') ';
    } else if (key >= 2 && key < 7) {
      //foneNumber += arrayNumber[key];
      foneNumber = foneNumber.concat(arrayNumber[key])
    } else if (key == 7) {
      foneNumber = `${foneNumber}-${arrayNumber[key]}`;
      //foneNumber += '-' + arrayNumber[key];
    }else if (key > 7) {
      foneNumber = foneNumber.concat(arrayNumber[key])
      //foneNumber += arrayNumber[key];
    }*/
  }
  return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`;
  //return foneNumber;
}
console.log(generatePhoneNumber(array11));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
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
