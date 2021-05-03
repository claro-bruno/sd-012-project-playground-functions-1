// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  if ((mouse - cat1) < (mouse - cat2)) {
    return "cat1";
  } else if (mouse - cat2 < mouse - cat1){
    return "cat2";
  } else {
    return "Os gatos trombam e o rato foge."
  }
}
console.log(catAndMouse(1,6,12))