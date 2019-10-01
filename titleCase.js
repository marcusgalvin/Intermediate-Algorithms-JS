///////////
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

//////////

function titleCase(str) {
  var answer = [];
  //check test case 2
  // console.log(str);

  //first make every word in str lower case to make this a little easier
  //split into an array
  var split = str.toLowerCase().split(" ");
  // console.log(lowerCase)

  for (var i = 0; i < split.length; i++) {
    // next locate the first char in each substring
    //this variable iterates through each substring and then accesses the first char by using [0]
    var firstLetterFinder = split[i][0];
    // console.log(firstLetterFinder)

    //capitalize the first letter
    var capital = firstLetterFinder.toUpperCase();
    // console.log(capital)

    //concatinate the new capital letter with each substring
    var concatCapital = capital.concat(split[i]);
    // console.log(split[i])
    // console.log(concatCapital)

    var sliceIndex = concatCapital.slice(2);
    // console.log("test:",sliceIndex)

    var testConCat = capital.concat(sliceIndex);
    // console.log(testConCat)

    answer.push(testConCat);
  }
  var res = answer.join(" ");
  console.log(res);

  return res;
}

titleCase("sHoRt AnD sToUt");
