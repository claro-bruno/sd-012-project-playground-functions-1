// Desafio 10
function techList(arrTech, strName) {
  let arrOrden = arrTech.sort();// ordenar a variável de entrada.
  let techObject = [];// variável vazia que vai receber os objetos.
  if (arrTech.length === 0) { // se a lista estiver vazia, o tamanho é 0.
    return 'Vazio!';
  } else { // cado arrTech não seja vazio, execute:
    for (let index = 0; index < arrOrden.length; index += 1) { // 'for' para percorrer cada elemento da array.
      let obj_index = { // criar objeto (igual faz com let).
        tech: arrOrden[index], // chave 'tech' que vai conter um elemento do array.
        name: strName, // chave 'name' que conterá o parâmetro 'name', que é uma string.
      };
      techObject.push(obj_index);
    }
    return techObject;
  }
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Cristiano'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
