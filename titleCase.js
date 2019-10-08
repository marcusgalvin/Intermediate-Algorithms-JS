function titleCase(str) {
  var answer = [];

  var split = str.toLowerCase().split(" ");

  for (var i = 0; i < split.length; i++) {
    var firstLetterFinder = split[i][0];

    var capital = firstLetterFinder.toUpperCase();

    var concatCapital = capital.concat(split[i]);

    var sliceIndex = concatCapital.slice(2);

    var testConCat = capital.concat(sliceIndex);

    answer.push(testConCat);
  }
  var res = answer.join(" ");
  console.log(res);

  return res;
}

titleCase("sHoRt AnD sToUt");
