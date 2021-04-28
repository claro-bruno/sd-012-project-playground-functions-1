function compareTrue(booleano1, booleano2) {
  if (booleano1 === true && booleano2 === true)
    return console.log('true');
  else return console.log('false');

};
compareTrue(true, true);

function calcArea(base, height) {
  let area = (base * height) / 2;
  return console.log(area);
};
calcArea(51, 1);

function spliSentence(string) {
  let array1=[string] ; let array2 = [];
  for (let indice = 0; indice < array1.lenght; indice += 1) {
    if (array1[indice] != ' ') {
      array2 = [array1[indice].push];
    };
  };
  return console.log(array2);
};
spliSentence('go Trybe');
