function sameFrequency(...numbers){
    const obj1 = {};
  
    for(var i=0; i < numbers.length; i++) {
      let a = numbers[i];
      obj1[a] = (obj1[a] || 0) + 1;
      if (obj1[a] > 1) {
        return true;
      }
    }
  
    return false;
  }

  