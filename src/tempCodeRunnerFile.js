// Desafio 6
function highestCount(arr) {
  let maior = 0;
  for (index = 0; index < arr.length; index += 1) {
    if (arr[index] === Math.max(...arr)) {
      maior += 1;
    }
  }
    return maior;
}
console.log(highestCount([0, 0, 0]));
