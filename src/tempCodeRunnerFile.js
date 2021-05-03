function highestCount(array) {
  // seu código aqui
array = [4, 7, 8, 8];
let contagem = 0;
let maiorNum = Math.max(...array);
  
  for (let index = 0; index < array.length; index += 1) {
      if (array[index] == maiorNum)
        contagem += 1;
  }
    return contagem;
}