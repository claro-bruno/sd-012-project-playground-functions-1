// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  // Para retornar uma lista ordenada por ordem alfabética, a condição que se inicia na linha 11 foi inspirada pela explicação que se encontra no link https://bit.ly/3tiJIUM, onde na função sort é inserida uma função anônima que atribui um valor para cada propriedade tech dos objetos, retornando os mesmos por ordem alfabética.
   let saida = [];

  if (arrayTech.length > 0){
    for (let index = 0; index < arrayTech.length; index += 1){
     saida.push({'tech':arrayTech[index],'name':name});
     saida.sort(function (key1, key2){
       if (key1.tech < key2.tech){
         return -1;
       } else if (key1.tech > key2.tech){
         return +1;
       } else {
         return 0;
       }
     });
    } 
  } else {
      saida = 'Vazio!';
  }
  return saida;
}
  
// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  let phone = [];
  let message;
  let phonenumber;
  let count = 0;

  for (let index = 0; index < number.length; index += 1) {
    for (let indice = 0; indice < number.length; indice += 1) {
      if ((index !== indice) && (number[index] === number[indice])){
        count += 1;
      }
    }
  }
  
  if (number.length > 11 || number.length < 11) {
    message= "Array com tamanho incorreto."
    return message;
    
  } else {
    for (let index = 0; index < number.length; index += 1) {
      if (number[index] < 0 || number[index] > 9 || count >= 3) {
        message = "não é possível gerar um número de telefone com esses valores";
        return message;
        
      } else {
        phone.push(number[index]);
        phonenumber = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
      }
    }
  }
  return phonenumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result = true;
  
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
     result = false;
  } 
  else if ((lineA < (Math.abs(lineB - lineC))) || (lineB < (Math.abs(lineA - lineC)))|| (lineC < (Math.abs(lineA - lineB)))){
     result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drink) {
  // seu código aqui
  // RegEx utilizado para extrair números da String visto no link https://bit.ly/3eMQPiW, onde utiiza-se a função .replace para localizar todos caracteres que não sejam números inteiros de 1 a 9 (\D), procurando "globalmente" na string inteira (/g), então substituindo-os por espaços vazios.
  let cups = drink.replace(/\D/g, '');
  let array = cups.split('')
  let soma = 0;
  let result;

  for (let index = 0; index < array.length; index += 1){
    let inteiro = parseInt(array[index]);
    soma += inteiro;
  }

  if (soma === 1){
  result = '1 copo de água';
  } else {
  result = `${soma} copos de água`
  }

  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
