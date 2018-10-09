// Minimum //
//Your code here.
var min = function(a, b) {
    if (a > b) 
      return b
    else 
      return a
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10


  //Recursion //
    function isEven(n) {
    if (n >= 0) {   
      if (n == 0)
        return true;
      else if (n == 1)
        return false;
      else{
        n -= 2
        isEven(n);
      }  
    }
    return ;
  }
  
  console.log(isEven(6))
  // → true
  console.log(isEven(7));
  // → false
  console.log(isEven(-1));
  // → ??


// Bean Counting //
// Your code here.
var countBs = (str) => {
    count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'b'){
            count++
        }
    }
    return count;
}

var countChar = (str, letter) => {
    count = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == letter.toLowerCase()){
            count++
        }
    }
    return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4