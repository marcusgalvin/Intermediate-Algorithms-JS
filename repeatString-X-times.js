function repeatStringNumTimes(str, num) {
  var newString = "";

  while (num > 0) {
    newString = newString + str;
    num--;
  }

  // repeat after me
  return newString;
}

repeatStringNumTimes("abc", 3);
