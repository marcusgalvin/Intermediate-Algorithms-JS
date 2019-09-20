function findLongestWordLength(str) {
  //set variable for longest length
  let longestWord = 0;

  let newSplitArray = str.split(" ");
  // console.log(newSplitArray)

  for (var i = 0; i < newSplitArray.length; i++) {
    console.log(newSplitArray[i]);
    console.log(newSplitArray[i].length);
    //  console.log(newSplitArray[0])

    if (newSplitArray[i].length > longestWord) {
      longestWord = newSplitArray[i].length;
    }
  }

  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
