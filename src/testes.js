// Desafio 6
function highestCount(numbers) {
    // seu código aqui
    let qtd = 0;
    let maior = 0;

   for(let i=0;i<numbers.length;i++){
    if(maior<numbers[i]){
        maior = numbers[i]
    }
 }

    for(let i=0; i<numbers.length;i++){
        if(numbers[i] === maior){
            qtd++;
        }
    }
    return qtd;
  }
  
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))
