function concatName(array) {
  let primeiroNome = array[array.length -1];         
  let ultimoNome =  array[0];
  let nome = primeiroNome + ', ' + ultimoNome;

  return nome; 