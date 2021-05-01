// Desafio 10
function techList(arrayTech, nameOf) {
  if (arrayTech.length === 0) {
    return 'Vazio!';
  } else {
  let arrayTechSorted = arrayTech.sort();
  let newArray = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    let obj = {
      tech: '',
      name: ''
    }
    obj.tech = arrayTechSorted[index];
    obj.name = nameOf;
    newArray.push(obj);
  }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(tel) {
  if (tel.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
      for (let index = 0; index < tel.length; index += 1) {
        if (tel[index] < 0 || tel[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    let contador = 0;
    for (let index2 = 0; index2 < tel.length; index2 += 1) {
      for (let index3 = 0; index3 < tel.length; index3 += 1) {
        if (tel[index2] === tel[index3]) {
          contador += 1;
        }
      }
      if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      contador = 0;
    }
  }
return '('+tel[0]+tel[1]+') '+tel[2]+tel[3]+tel[4]+tel[5]+tel[6]+'-'+tel[7]+tel[8]+tel[9]+tel[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
      return true;
    }
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebida) {
  let qtd = /\d+/g;
  let bebidaQtd = bebida.match(qtd);
  let soma = 0;

  for (let index = 0; index < bebidaQtd.length; index +=1 ) {
    stringPraInt = parseInt(bebidaQtd[index]);
    soma += stringPraInt;
  }
  if (soma === 1) {
    return "1 copo de água";
  } else {
    return `${soma} copos de água`;
  }
} 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
