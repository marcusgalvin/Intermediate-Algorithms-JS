function factorialize(num) {
  let total = 1;

  for (var i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorialize(5);
