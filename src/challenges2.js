// Desafio 10
function techList(arrayTecnologias, name) {
  // seu código aqui
  let ordenado = arrayTecnologias.sort();
  let objeto = [];
  if (ordenado.length > 0) {
    for (let i = 0; i < ordenado.length; i += 1) {
      objeto[i] = { tech: ordenado[i], name: name };
    }
    return objeto;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numeroTelefone) {
  // seu código aqui
  let numeroArrumado = numeroTelefone.join('');
  let numeroRepetido = [];
  let maior = 0;

  if (numeroTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let number of numeroTelefone) {
    let contador = 0;
    for (let checa of numeroTelefone) {
      if (number === checa) {
        contador += 1;
      }
    }
    if (number < 0 || number > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  numeroArrumado = `(${numeroTelefone[0]}${numeroTelefone[1]}) ${numeroTelefone[2]}${numeroTelefone[3]}${numeroTelefone[4]}${numeroTelefone[5]}${numeroTelefone[6]}-${numeroTelefone[7]}${numeroTelefone[8]}${numeroTelefone[9]}${numeroTelefone[10]}`;

  return numeroArrumado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let ladoA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let ladoB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let ladoC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);
  if (ladoA == true && ladoB == true && ladoC == true) {
    return true;
  } 
    return false;
  }

console.log(triangleCheck(10, 14, 8));
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
