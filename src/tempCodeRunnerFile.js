function catAndMouse(mouse, cat1, cat2) {
  let distancecat1 = (cat1 - mouse);
  let distancecat2 = (cat2 - mouse);
  if (distancecat1 < distancecat2) {
    return "cat1";
  } else if (distancecat2 < distancecat1) {
    return "cat2";
  } else if (distancecat1 === distancecat2) {
    return 'os gatos trombaram e o rato foge';
  }
}

console.log(catAndMouse(1, 4, 3));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 3, 3));