function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 == true){
    return(true);
  } else {
    return(false);
  };
};

console.log(compareTrue(true, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, true));