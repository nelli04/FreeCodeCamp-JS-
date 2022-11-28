// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const count = countdown(n - 1);
      count.unshift(n);
      return count;
      }
    console.log(count());
  }
  
  // Only change code above this line