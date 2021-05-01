function catAndMouse(mause, cat1, cat2) {
  let distCat1Mause = Math.abs(cat1 - mause);
  let distCat2Mause = Math.abs(cat2 - mause);

  if ((distCat2Mause) < (distCat1Mause)) {
    return 'cat2';
  } else if (distCat1Mause < distCat2Mause) {
    return 'cat1';
  } else if (distCat1Mause === distCat2Mause) {
  return 'os gatos trombam e o rato foge' ;
  }
 }
 console.log(catAndMouse(1, 0, 5));