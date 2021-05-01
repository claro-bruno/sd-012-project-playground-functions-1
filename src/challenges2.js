// Desafio 10
function techList(arrayTeconologias, nome) {
  if (arrayTeconologias.length == 0) {
    return "Vazio!";
  };

  let objetosTecnologiaOrdenados = [];

  for (let tecnologia in arrayTeconologias) {
    let objetoTecnologia = {
      tech: arrayTeconologias[tecnologia],
      name: nome
    };

    for (let objeto in objetosTecnologiaOrdenados) {
      if (arrayTeconologias[tecnologia] < objetosTecnologiaOrdenados[objeto].tech) {
        objetosTecnologiaOrdenados.splice(objeto, 0, objetoTecnologia);
        break;
      };
    };

    if (tecnologia == objetosTecnologiaOrdenados.length) {
      objetosTecnologiaOrdenados.push(objetoTecnologia);
    };
  };

  return objetosTecnologiaOrdenados;
};

function seRepeteVezes(arrayNumeros, repeticoes) {
  let repete = 0;

  for (let numero1 of arrayNumeros) {
    for (let numero2 of arrayNumeros) {
      if (numero1 == numero2) {
        repete += 1;
        if (repete == repeticoes) {
          return true;
        };
      };
    };
    repete = 0;
  };

  return false;
};

// Desafio 11
function generatePhoneNumber(arrayNumeroTelefone) {
  if (arrayNumeroTelefone.length != 11) {
    return "Array com tamanho incorreto.";
  };

  for (let algarismo of arrayNumeroTelefone) {
    if (algarismo < 0 || algarismo > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    };
  };

  if (seRepeteVezes(arrayNumeroTelefone) == true) {
    return "não é possível gerar um número de telefone com esses valores";
  };

  return "(" + arrayNumeroTelefone.slice(0, 2).join('') + ") " + arrayNumeroTelefone.slice(2, 7).join('') + "-" + arrayNumeroTelefone.slice(7, 11).join('');
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB) ||
    lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  };

  return true;
};

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let bebidas = [];
  let contagem = 0;;

  bebidas = string.match(regex);

  for (let numero of bebidas) {
    contagem += parseInt(numero);
  };

  return contagem + " copos de água";
};

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
