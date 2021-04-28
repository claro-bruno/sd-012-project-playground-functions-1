// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if (mouse - cat1 < mouse - cat2){
        return "cat2";
    }else if(mouse - cat1 > mouse - cat2) {
        return "cat1";
    }else{
        return "os gatos trombam e o rato foge"
    }
  }

  console.log(catAndMouse(3,5,5))