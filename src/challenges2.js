// Desafio 10
function techList(arrTech, strName) {
  let arrOrden = arrTech.sort();// ordenar a variável de entrada.
  let techObject = [];// variável vazia que vai receber os objetos.
  if (arrTech.length === 0) { // se a lista estiver vazia, o tamanho é 0.
    return 'Vazio!';
  } else { // cado arrTech não seja vazio, execute:
    for (let index = 0; index < arrOrden.length; index += 1) { // 'for' para percorrer cada elemento da array.
      let objIndex = { // criar objeto (igual faz com let).
        tech: arrOrden[index], // chave 'tech' que vai conter um elemento do array.
        name: strName, // chave 'name' que conterá o parâmetro 'name', que é uma string.
      };
      techObject.push(objIndex);
    }
    return techObject;
  }
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Cristiano'));

// Desafio 11
function generatePhoneNumber(arrNumb) {
  if (arrNumb.length === 11) {
    for (let index of arrNumb){
      if (index < 0 || index > 9 || repeted(arrNumb) > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    return 'Array de tamanho incorreto.';
  }
  function repeted(arrNumb) {
    let contador = 0;
    let repetedNamb = 0;
    for (let key of arrNumb) {
      let numero = key;
      for (let key2 of arrNumb) {
        if (numero === key2) {
          contador += 1;
        }
      }
      repetedNamb = contador;
    }
    return contador;
    contador = 0;
    }
  return `(${arrNumb[0]}${arrNumb[1]})${arrNumb[2]}${arrNumb[3]}${arrNumb[4]}${arrNumb[5]}${arrNumb[6]}-${arrNumb[7]}${arrNumb[8]}${arrNumb[9]}${arrNumb[10]}`;
}
console.log(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));











// Desafio 12
function triangleCheck() {
  // seu código aqui
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
