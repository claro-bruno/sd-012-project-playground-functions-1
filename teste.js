// Desafio 6
function highestCount(array) {
    let repeat = 0;
    let highNumber = 0;
    for(accountant = 0; accountant<array.length; accountant+=1){
      if (array[accountant] > highNumber){
        highNumber = array[accountant]
      }
    }
    for(accountant = 0; accountant < array.length; accountant+=1){
      if(highNumber === array[accountant]){
        repeat += 1
      }
    }
    return repeat;
    }
    highestCount([9,1,2,3,9,5,7])