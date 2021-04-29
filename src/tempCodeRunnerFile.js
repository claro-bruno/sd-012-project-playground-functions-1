function encode(code) {
  code = code.split('');
  for (let index = 0; index<code.length; index += 1){
    switch (code[index]) {
      case 'a': code[index] = '1';
      break;
      case 'e': code[index] = '2';
      break;
      case 'i': code[index] = '3';
      break;
      case 'o': code[index] = '4';
      break;
      case 'u': code[index] = '5';
      break;
      default: code[index] == code[index];
    }
  }
  return code.join('');
}

function decode(decoded) {
  decoded = decoded.split('')
  for (let index = 0; index<decoded.length; index += 1){
    switch (decoded[index]) {
      case '1': decoded[index] = 'a';
      break;
      case '2': decoded[index] = 'e';
      break;
      case '3': decoded[index] = 'i';
      break;
      case '4': decoded[index] = 'o';
      break;
      case '5': decoded[index] = 'u';
      break;
      default: decoded[index] == decoded[index];
    }
  }
  return decoded.join('');
}

console.log(encode("hi there"));
console.log(decode("h3 th2r2!"));