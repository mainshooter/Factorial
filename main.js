var result1 = factorial(5);
console.log(result1);

var result2 = factorial(8);
console.log(result2);

var result3 = factorial(1);
console.log(result3);

var result4 = factorial(0);
console.log(result4);

var result5 = factorial(-1);
console.log(result5);


function factorial(factorialNumber) {
  var uitkomst;

  for (var i = factorialNumber; i > 0; i--) {
    if (factorialNumber === i) {
      uitkomst = factorialNumber;
    }
    else {
      uitkomst = uitkomst * i;
    }
  }
  return(uitkomst);
}
