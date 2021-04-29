// Desafio 11
function generatePhoneNumber(n) {
  // seu código aqui
  if (n.length === 11){
    for (let i = 0; i < 11; i += 1){
      let count = 0;
      for ( let j = 0; j < 11; j += 1){
        if(n[i] === n[j]){
          count +=1;
          if (n[j] < 0 || n[j] > 9 || count > 2){
            return 'não é possível gerar um número de telefone com esses valores'
          }
        }
    }
    } return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`
  }
    return 'Array com tamanho incorreto. '
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]))