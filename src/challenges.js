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
    }
  }
  return outputArray;
}
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(inputString) {
  let outputString = '';
  for (let index in inputString) {
    switch (inputString[index]) {
    case 'a':
      outputString += '1';
      break;
    case 'e':
      outputString += '2';
      break;
    case 'i':
      outputString += '3';
      break;
    case 'o':
      outputString += '4';
      break;
    case 'u':
      outputString += '5';
      break;
    default:
      outputString += inputString[index];
    }
  }
  return outputString;
}
// console.log(encode('hi there!'));
// console.log(encode("Hey there, Delilah What's it like in New York City? I'm a thousand miles away But girl tonight you look so pretty Yes, you do Times Square can't shine as bright as you I swear it's true  Hey there, Delilah Don't you worry about the distance I'm right there if you get lonely Give this song another listen Close your eyes Listen to my voice it's my disguise I'm by your side  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me  Hey there, Delilah I know times are getting hard But just believe me girl Someday I'll pay the bills with this guitar We'll have it good We'll have the life we knew we would My word is good  Hey there, Delilah I've got so much left to say If every simple song I wrote to you Would take your breath away I'd write it all Even more in love with me you'd fall We'd have it all  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me  A thousand miles seems pretty far But they've got planes and trains and cars I'd walk to you if I had no other way Our friends would all make fun of us And we'll just laugh along because we know That none of them have felt this way Delilah I can promise you That by the time that we get through The world will never ever be the same And you're the blame  Hey there, Delilah You be good and don't you miss me Two more years and you'll be done with school And I'll be making history like I do You know it's all because of you We can do whatever we want to Hey there Delilah heres to you This one's for you  Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me Oh it's what you do to me What you do to me Oh oh oh Oh oh oh"));
// console.log('----------------------');

function decode(inputString) {
  let outputString = '';
  for (let index in inputString) {
    switch (inputString[index]) {
    case '1':
      outputString += 'a';
      break;
    case '2':
      outputString += 'e';
      break;
    case '3':
      outputString += 'i';
      break;
    case '4':
      outputString += 'o';
      break;
    case '5':
      outputString += 'u';
      break;
    default:
      outputString += inputString[index];
    }
  }
  return outputString;
}
// console.log(decode('h3 th2r2!'));
// console.log(decode("H2y th2r2, D2l3l1h Wh1t's 3t l3k2 3n N2w Y4rk C3ty? I'm 1 th45s1nd m3l2s 1w1y B5t g3rl t4n3ght y45 l44k s4 pr2tty Y2s, y45 d4 T3m2s Sq51r2 c1n't sh3n2 1s br3ght 1s y45 I sw21r 3t's tr52  H2y th2r2, D2l3l1h D4n't y45 w4rry 1b45t th2 d3st1nc2 I'm r3ght th2r2 3f y45 g2t l4n2ly G3v2 th3s s4ng 1n4th2r l3st2n Cl4s2 y45r 2y2s L3st2n t4 my v43c2 3t's my d3sg53s2 I'm by y45r s3d2  Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Wh1t y45 d4 t4 m2  H2y th2r2, D2l3l1h I kn4w t3m2s 1r2 g2tt3ng h1rd B5t j5st b2l32v2 m2 g3rl S4m2d1y I'll p1y th2 b3lls w3th th3s g53t1r W2'll h1v2 3t g44d W2'll h1v2 th2 l3f2 w2 kn2w w2 w45ld My w4rd 3s g44d  H2y th2r2, D2l3l1h I'v2 g4t s4 m5ch l2ft t4 s1y If 2v2ry s3mpl2 s4ng I wr4t2 t4 y45 W45ld t1k2 y45r br21th 1w1y I'd wr3t2 3t 1ll Ev2n m4r2 3n l4v2 w3th m2 y45'd f1ll W2'd h1v2 3t 1ll  Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2  A th45s1nd m3l2s s22ms pr2tty f1r B5t th2y'v2 g4t pl1n2s 1nd tr13ns 1nd c1rs I'd w1lk t4 y45 3f I h1d n4 4th2r w1y O5r fr32nds w45ld 1ll m1k2 f5n 4f 5s And w2'll j5st l15gh 1l4ng b2c15s2 w2 kn4w Th1t n4n2 4f th2m h1v2 f2lt th3s w1y D2l3l1h I c1n pr4m3s2 y45 Th1t by th2 t3m2 th1t w2 g2t thr45gh Th2 w4rld w3ll n2v2r 2v2r b2 th2 s1m2 And y45'r2 th2 bl1m2  H2y th2r2, D2l3l1h Y45 b2 g44d 1nd d4n't y45 m3ss m2 Tw4 m4r2 y21rs 1nd y45'll b2 d4n2 w3th sch44l And I'll b2 m1k3ng h3st4ry l3k2 I d4 Y45 kn4w 3t's 1ll b2c15s2 4f y45 W2 c1n d4 wh1t2v2r w2 w1nt t4 H2y th2r2 D2l3l1h h2r2s t4 y45 Th3s 4n2's f4r y45  Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Oh 3t's wh1t y45 d4 t4 m2 Wh1t y45 d4 t4 m2 Oh 4h 4h Oh 4h 4h"));


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
