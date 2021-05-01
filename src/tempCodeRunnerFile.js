function encode(frase) {
  let frasecode = '';
  let arm1 = '';

  for (let index = 0; index < frase.length; index += 1) {
  arm1 += frase[index];
    frasecode = arm1.replace(/a/gi,'1')
    .replace(/e/gi,'2')
    .replace(/i/gi,'3')
    .replace(/o/gi,'4')
    .replace(/u/gi,'5');
  }
  return frasecode;
}
console.log(encode("hi there!"))

function decode(frase) {
    let frasedecode = '';
    let arm = '';
  
    for (let index1 = 0; index1 < frase.length; index1 += 1) {
    arm += frase[index1];
      frasedecode = arm.replace(/1/gi,'a')
      .replace(/2/gi,'e')
      .replace(/3/gi,'i')
      .replace(/4/gi,'o')
      .replace(/5/gi,'u');
    }
    return frasedecode;
  }
  console.log(decode("h3 th2r2!"))