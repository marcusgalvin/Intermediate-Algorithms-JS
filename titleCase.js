function titleCase(str) {
  var result = "";
  //first make every word in str lower case to make this a little easier
  var lowerCase = str.toLowerCase();
  console.log(lowerCase);

  //split into array
  var split = lowerCase.split(" ");
  console.log(split);

  for (var i = 0; i < split.length; i++) {
    // next locate the first char in each substring
    //this variable iterates through each substring and then acces the first char by using [0]
    var firstLetterFinder = split[i][0];
    // console.log(firstLetterFinder)

    var finalResult = firstLetterFinder.toUpperCase();
    console.log(finalResult);
  }

  return finalResult;
}

titleCase("I'm a little tea pot");
