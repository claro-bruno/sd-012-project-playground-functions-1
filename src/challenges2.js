// Desafio 10
function techList(arrayTech, nameTech) {
  if (arrayTech.length === 0) {
    return 'Vazio!'};
  let arrayTechSort = arrayTech.sort();
  let arrayObjeTech = [];

  for (let index = 0; index < arrayTechSort.length; index += 1){
    let objetoTech = {
      tech: arrayTechSort[index],
      name: nameTech, 
    };
  arrayObjeTech.push(objetoTech);   
  }
  return arrayObjeTech;
}

// Desafio 11
function generatePhoneNumber(lista) {
  let repeticao = 0;
  if(lista.length != 11 ){
    return "Array com tamanho incorreto.";
  } 
  for(let value of lista){
    repeticao = 0
    for(let value2 of lista){
      if(value2 === value){
          repeticao +=1;
      } 
    }
    if(lista[value] < 0 || lista[value] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
      if(repeticao >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
  }
  return `(${lista[0]}${lista[1]}) ${lista[2]}${lista[3]}${lista[4]}${lista[5]}${lista[6]}-${lista[7]}${lista[8]}${lista[9]}${lista[10]}`;  
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  let triangiloABC = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  let triangiloBAC = (lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC));
  let triangiloCBA = (lineC < lineB + lineA) && (lineC > Math.abs(lineB - lineA));

  if(triangiloABC && triangiloBAC && triangiloCBA){
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(frase) {
  let numerosEmString = frase.replace(/([^\d])+/gim, '');
  let numerosSomados = 0;

  for(let key in numerosEmString){
    numerosSomados += parseInt(numerosEmString[key])
  }
  if(numerosSomados > 1){
    return `${numerosSomados} copos de água`;
  } else {
    return `${numerosSomados} copo de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
