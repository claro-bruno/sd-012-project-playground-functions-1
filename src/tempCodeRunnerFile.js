// Desafio 3
function splitSentence(string) {
    // seu código aqui
      let frase = '';
      let array = [];
      for(let index = 0; index < string.length; index += 1){
        if(index == string.length - 1){
          frase += string[index];
          array.push(frase);
        }
        else if(string[index] != ' '){
          frase += string[index];
        }
        else{
          array.push(frase);
          frase = '';
        }
      }
      console.log(array)