// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if(boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  };
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height / 2);
  return area;
};

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  str = str.split(' ');
  return str;
};
let sentence = 'go Tybe';
console.log(splitSentence(sentence));

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let last = arr[arr.length - 1];
  let first = arr[0];
  let together = last + ',' + ' ' + first;
  return together;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
  let points = (wins*3) + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let highest = arr[0];
  let count = 0;
  for(let index = 0; index < arr.length;index +=1){
    if(highest < arr[index]) {
      highest = arr[index];
    };
  }
  for (let index of arr){
    if (index === highest){
      count += 1;
    }
  }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if(distCat1 < distCat2) {
    return 'cat1';
  } else if(distCat1 > distCat2) {
    return 'cat2';
  } else if(distCat2 === distCat1) {
    return 'os gatos trombam e o rato foge';
  };
  return;
};


// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let str = [];
  for(let index = 0; index < arr.length; index +=1){
    if(arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      str.push("fizzBuzz");
    } else if(arr[index] % 5 === 0) {
      str.push("buzz");
    }else if(arr[index] % 3 === 0) {
      str.push("fizz");  
    }else if(arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      str.push("fizzBuzz");
    } else {
      str.push("bug!");
    };
  };  
  return str;
};

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
