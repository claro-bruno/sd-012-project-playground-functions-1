function hydrate(str) {
  let glassesOfWater = 0;
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let index = 0; index < str.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index += 1) {
      if (index == index2) {
        glassesOfWater += str[index];
      }
    }
  }
  if (glassesOfWater > 1) {
    return `${glassesOfWater} copos de água`;
  } else {
    return `${glassesOfWater} copo de água`;
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));