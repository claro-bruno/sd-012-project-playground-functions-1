// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 === true && valor2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayStrings) {
  let firstString = arrayStrings[0];
  let lastString = arrayStrings[arrayStrings.length - 1];
  return (lastString + ', ' + firstString);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let times = 0;
  let highestNumber = 0;
  for (let index in numbers) {
    for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1) {
      if (numbers[index] > highestNumber) {
        highestNumber = numbers[index];
      }
    }
  }
  for (let index in numbers) {
    if (numbers[index] === highestNumber) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // pesquisar funcao ABS (plantao do Issac)
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let nearCat = '';
  if (cat1Distance < cat2Distance) {
    nearCat = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    nearCat = 'cat2';
  } else {
    nearCat = 'os gatos trombam e o rato foge';
  }
  return nearCat;
}
// console.log(catAndMouse(0, 6, 12));

// Desafio 8
function fizzBuzz(numbers) {
  let outputArray = [];
  for (let index in numbers) {
    if (((numbers[index] % 3) === 0) && ((numbers[index] % 5) === 0)) {
      outputArray.push('fizzBuzz');
    } else if ((numbers[index] % 3) === 0) {
      outputArray.push('fizz');
    } else if ((numbers[index] % 5) === 0) {
      outputArray.push('buzz');
    } else {
      outputArray.push('bug!');
    };
  };
  return outputArray;
}
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(inputString) {
  let outputString = '';
  for (let index in inputString) {
    switch (inputString[index]) {
      case 'a':
        outputString += '1'
        break;

      case 'e':
        outputString += '2'
        break;

      case 'i':
        outputString += '3'
        break;

      case 'o':
        outputString += '4'
        break;

      case 'u':
        outputString += '5'
        break;
      
      default:
        outputString += inputString[index];
    }
  }
  return outputString;
}
// console.log(encode("Hey there, Delilah What's it like in New York City? I'm a thousand miles away But girl tonight you look so pretty Yes, you do Times Square can't shine as bright as you I swear it's true  Hey there, Delilah Don't you worry about the distance I'm right there if you get lonely Give this song another listen Close your eyes Listen to my voice it's my disguise I'm by your side  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me  Hey there, Delilah I know times are getting hard But just believe me girl Someday I'll pay the bills with this guitar We'll have it good We'll have the life we knew we would My word is good  Hey there, Delilah I've got so much left to say If every simple song I wrote to you Would take your breath away I'd write it all Even more in love with me you'd fall We'd have it all  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me  A thousand miles seems pretty far But they've got planes and trains and cars I'd walk to you if I had no other way Our friends would all make fun of us And we'll just laugh along because we know That none of them have felt this way Delilah I can promise you That by the time that we get through The world will never ever be the same And you're the blame  Hey there, Delilah You be good and don't you miss me Two more years and you'll be done with school And I'll be making history like I do You know it's all because of you We can do whatever we want to Hey there Delilah heres to you This one's for you  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me Oh oh oh Oh oh oh"));
// console.log('----------------------')

function decode(inputString) {
  let outputString = '';
  for (let index in inputString) {
    switch (inputString[index]) {
      case '1':
        outputString += 'a'
        break;

      case '2':
        outputString += 'e'
        break;

      case '3':
        outputString += 'i'
        break;

      case '4':
        outputString += 'o'
        break;

      case '5':
        outputString += 'u'
        break;
      
      default:
        outputString += inputString[index];
    }
  }
  return outputString;
}
// console.log(decode("Hey there, Delilah What's it like in New York City? I'm a thousand miles away But girl tonight you look so pretty Yes, you do Times Square can't shine as bright as you I swear it's true  Hey there, Delilah Don't you worry about the distance I'm right there if you get lonely Give this song another listen Close your eyes Listen to my voice it's my disguise I'm by your side  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me  Hey there, Delilah I know times are getting hard But just believe me girl Someday I'll pay the bills with this guitar We'll have it good We'll have the life we knew we would My word is good  Hey there, Delilah I've got so much left to say If every simple song I wrote to you Would take your breath away I'd write it all Even more in love with me you'd fall We'd have it all  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me  A thousand miles seems pretty far But they've got planes and trains and cars I'd walk to you if I had no other way Our friends would all make fun of us And we'll just laugh along because we know That none of them have felt this way Delilah I can promise you That by the time that we get through The world will never ever be the same And you're the blame  Hey there, Delilah You be good and don't you miss me Two more years and you'll be done with school And I'll be making history like I do You know it's all because of you We can do whatever we want to Hey there Delilah heres to you This one's for you  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me Oh oh oh Oh oh oh"));


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
