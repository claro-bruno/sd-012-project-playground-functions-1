// Desafio 10
function techList(array, nome) {
  let total = [];
  let objetos = {};
  let tamanho = array.length;
  if (array == '') {
    return 'Vazio!';
  } else {
    for (let index = 0; index < tamanho; index += 1) {
      objetos.tech = array[index];
      objetos.name = nome;
      total.push(objetos);
      objetos = {};
    };
  };
  total.sort((a, b) => {
    if (a.tech > b.tech) {
      return 1;
    }
    else {
      return -1;
    }
  });
  return total;
};
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numeros) {
  let telefoneNumero = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
  let phoneNumberPosition = 0;
  let posicaoDeEntrada = 0;
  let posicaoMaxima = 15;
  let resultado = '';

  if (numeros.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else {
    for (let index of numeros) {
      if (index < 0 || index > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    let repeticao = 0;
    let atual = 0;
    for (let index of numeros) {
      // console.log(index);
      atual = index;
      for (let i of numeros) {
        if (atual === i) {
          repeticao += 1;
          // console.log(repeticao);
        }
        if (repeticao >= 3) {
          resultado = 'não é possível gerar um número de telefone com esses valores';
        }
      }
      repeticao = 0;
    }

    if (resultado === '') {
      for (let index = 0; index < posicaoMaxima; index += 1) {
        if (telefoneNumero[index] === '') {
          if (phoneNumberPosition === 0) {
            telefoneNumero[index] = '(';
            phoneNumberPosition += 1;
          } else if (phoneNumberPosition === 3) {
            telefoneNumero[index] = ')';
            phoneNumberPosition += 1;
          } else if (phoneNumberPosition === 4) {
            telefoneNumero[index] = ' ';
            phoneNumberPosition += 1;
          } else if (phoneNumberPosition === 10) {
            telefoneNumero[index] = '-';
            phoneNumberPosition += 1;
          } else {
            telefoneNumero[index] = numeros[posicaoDeEntrada];
            phoneNumberPosition += 1;
            posicaoDeEntrada += 1;
          }
        }
      }
      telefoneNumero = Object.values(telefoneNumero);
      resultado = telefoneNumero.join();
      for (let index in resultado) {
        resultado = resultado.replace(',', '');
      }
    }
  }
  return resultado;
  // (12) 34567-8901
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(linha1, linha2, linha3) {
  linha1 = Math.abs(linha1);
  linha2 = Math.abs(linha2);
  linha3 = Math.abs(linha3);
  let isTriangulo = false;

  if (linha1 < (linha2 + linha3)
  && linha1 > (Math.abs(linha2 - linha3))) {
    isTriangulo = true;
  } else if (linha2 < (linha1 + linha3)
  && linha2 > (Math.abs(linha1 + linha3))) {
    isTriangulo = true;
  } else if (linha3 < (linha1 + linha2)
  && linha3 > (Math.abs(linha1 + linha2))) {
    isTriangulo = true;
  }
  return isTriangulo;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(quantidade) {
  let string;
  let soma = 0;
  // for (let index in quantidade) {
  //   array[index] = quantidade[index];
  // }
  // quantidade = array.join();
  // let soma = 0;
  // for (let index in array) {
  // 
  // }
  let expressao = /\d+/g;
  while ((string = expressao.exec(quantidade)) != null) {
    soma += Math.abs(string);
    // console.log(string[0]);
  }
  if (soma !== 1) {
    string = soma + ' copos de água';
  } else {
    string = soma + ' copo de água';
  }
  // array = quantidade.match(/\d+/);
  return string;
}
console.log(hydrate('1 cachaça, 0 cervejas e 0 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
