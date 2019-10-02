function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < str.length; i++) {
    // console.log(vowels[i])
    // console.log(str[0])

    if (str[0] == vowels[i]) {
      var concat = str.concat("way");
      console.log(concat);
      return concat;
    } else {
      console.log(str);
      console.log(str[0]);
    }

    // if (str[0] !== vowels[i]){
    //   var shift = str.shift()
    //   console.log(shift)
    // }
  }

  return str;
}

translatePigLatin("eight");
