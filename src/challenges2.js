// // Desafio 10
// function techList(arr, name) {
//   arr.sort();
//   let finalList = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     let objeto = {
//       tech: arr[index],
//       name: name
//     }
//     finalList.push(objeto);
//   }
//   if (arr.length == 0) {
//     return 'Vazio!'
//   } else {
//     return finalList;
//   };
// };
// console.log(techList([], "Lucas"));

// Desafio 11
function generatePhoneNumber(arr) {

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (let index = 0; index <= arr.length; index += 1) {
    if (arr[index] < 0 || arr[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index <= arr.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < arr.length; index2 += 1) {
      if (arr[index] == arr[index2]) {
        count += 1;
          if (count >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
      }
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`
}
console.log(generatePhoneNumber([1, 9, 2, 3, 3, 6, 7, 8, 8, 2, 9]));

// // Desafio 12
// function triangleCheck() {
//   // seu código aqui
// }

// // Desafio 13
// function hydrate() {
//   // seu código aqui
// }

// module.exports = {
//   generatePhoneNumber,
//   techList,
//   hydrate,
//   triangleCheck,
// };
