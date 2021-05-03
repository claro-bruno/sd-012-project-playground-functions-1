
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return "cat1";
  } else if ((cat2 - mouse) < (cat1 - mouse)){
    return "cat2";
  } else if ((cat1 - mouse) == (cat2 - mouse)){
    return "os gatos trombam e o rato foge"
  }  
} console.log(catAndMouse(4, 16, 16));