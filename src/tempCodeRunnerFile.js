function concatName(strings) {
  let array = strings;
  return (array[array.length -1]) + ', ' + (array[0]);
}

strings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(strings));
strings =  ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(strings));
strings = ['captain', 'my', 'captain'];
console.log(concatName(strings));