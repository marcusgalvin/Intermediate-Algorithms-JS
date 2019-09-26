function titleCase(str) {
  //check test case 2
  console.log(str);

  var result = "";
  //first make every word in str lower case to make this a little easier
  var lowerCase = str.toLowerCase();
  // console.log(lowerCase)

  //split into array
  var split = lowerCase.split(" ");
  // console.log(split)

  for (var i = 0; i < split.length; i++) {
    // next locate the first char in each substring
    //this variable iterates through each substring and then acces the first char by using [0]
    var firstLetterFinder = split[i][0];
    // console.log(firstLetterFinder)

    //capitalize the first letter
    var capital = firstLetterFinder.toUpperCase();
    // console.log(capital)

    //concatinate the new capital letter with each substring
    var concatCapital = capital.concat(split[i]);
    // console.log(concatCapital)

    var test = concatCapital.slice(2);
    // console.log("test",test)

    var testConCat = capital.concat(test);
    // console.log(testConCat)

    var results = testConCat.toString();
    console.log(results);

    //now we need to remove the second index of each substring
    // console.log(concatCapital[1][0])

    // finalResult = concatCapital.slice(1);
    // console.log(finalResult)
  }

  return results;
}

titleCase("sHoRt AnD sToUt");
