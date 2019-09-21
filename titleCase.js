function titleCase(str) {
  var result = "";
  //first make every word in str lower case
  var lowerCase = str.toLowerCase();
  console.log(lowerCase);

  //split into array
  var split = lowerCase.split(" ");
  console.log(split);

  // next locate the first char in each substring
  var firstLetterFinder = split[0][0];
  console.log(firstLetterFinder);

  var finalResult = firstLetterFinder.toUpperCase();
  console.log(finalResult);

  return str;
}

titleCase("I'm a little tea pot");
