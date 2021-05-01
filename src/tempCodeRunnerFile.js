function triangleCheck(lineA, lineB, lineC) {
    if((lineA < (lineB + lineC)) && (lineB < (lineA + lineC)) && (lineC < (lineA + lineB))){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(triangleCheck(10, 14, 8));