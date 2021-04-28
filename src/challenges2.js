// Desafio 10
function techList(array, name) {
  if (array[0] == null) {
    return "Vazio!";
  }
  let skills = [];
  let vet = array.sort();
  for (let i = 0; i < array.length; i++){
    skills[i] = {
      tech: vet[i],
      name: name
    }
  }
  return skills;
}

// Desafio 11
function generatePhoneNumber(number) {
  if (number.length != 11) {
    return "Array com tamanho incorreto.";
  }
  let cont = 0;
  let n = false;
  for (let i = 2; i < number.length - 1; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] == number[j]) {
        cont++;
      }
    }
  }
  for (let k = 0; k < number.length; k++) {
    if (number[k] < 0 || number[k] > 9) {
      n = true;
    }
  }
  if (cont > 2 || n == true) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  return "(" + number[0] + number[1] + ")" + number[2] + number[3] + number[4] + number[5] + number[6] + "-" +  + number[7] + number[8] + number[9] + number[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) {
    return false;
  }
  if (lineA <= Math.abs(lineB - lineC) || lineB <= Math.abs(lineA - lineC) || lineC <= Math.abs(lineA - lineB)){
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let cont = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == '1') {
      cont += 1;
    }
    if (string[i] =='2') {
      cont += 2;
    }
    if (string[i] == '3') {
      cont += 3;
    }
    if (string[i] == '4') {
      cont += 4;
    }
    if (string[i] == '5') {
      cont += 5;
    }
    if (string[i] == '6') {
      cont += 6;
    }
    if (string[i] == '7') {
      cont += 7;
    }
    if (string[i] == '8') {
      cont += 8;
    }
    if (string[i] == '9') {
      cont += 9;
    }
  }
  return cont + " copos de água"
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
