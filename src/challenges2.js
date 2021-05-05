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
  if (arrNumb.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrNumb.length; index += 1) {
    if (arrNumb[index] < 0 || arrNumb[index] > 9) {
      return 'Não é possível gerar um número de telefone com esses valores.';
    }
    let contador = 0;
      for (let key = 0; key < arrNumb.length; key += 1) {
      if (arrNumb[index] === arrNumb[key]) {
        contador += 1;
      }
      }
      if (contador >= 3) {
        return 'Não é possível gerar um número de telefone com esses valores.';
    }
  }
//console.log(contador);
}
console.log(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 9, 9, 9]));



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
