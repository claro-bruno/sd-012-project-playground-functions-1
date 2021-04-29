// Desafio 8
function fizzBuzz(numbers) {
    // seu código aqui
    let resposta = [];
    for (let i = 0; i<numbers.length; i+=1){
      if (numbers[i] % 3 === 0 && numbers[i] % 5 != 0) {
        resposta.push('fizz')
      } else if(numbers[i] % 5 === 0 && numbers[i] % 3 != 0) {
        resposta.push('buzz')
      } else if (numbers[i] % 5 != 0 && numbers[i] % 3 != 0){
        resposta.push('bug!')
      } else {
        resposta.push('fizzBuzz') 
      }
    }
    return resposta;
  }
  