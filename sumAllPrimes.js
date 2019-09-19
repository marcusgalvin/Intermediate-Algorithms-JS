function sumPrimes(num) {
  //variable to return the sum of all primes
  var sum = 0;

  //get an iterator, and start at 2 since all primes must be greater than 1
  //write function checkPrimes to check each number for prime or not
  function checkPrime(i) {
    for (var j = 2; j < i; j++) {
      //if i is divisible by j then the number should NOT be prime
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  //now a for loop to check if the number we want is correct, then add it too the sum array
  for (var i = 2; i <= num; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }
  return sum;
  // returns 17 - the correct answer.
}
sumPrimes(10);
