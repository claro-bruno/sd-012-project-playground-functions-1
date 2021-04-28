function footballPoints(wins, ties) {
  let points = (wins*3) + ties;
  return points;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));