// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if (cat1 - mouse < cat2 - mouse){
        return "cat1";
    }else if(cat1 - mouse > cat2 - mouse) {
        return "cat2";
    }else{
        return "os gatos trombam e o rato foge"
    }
  }

  console.log(catAndMouse(0,12,12))