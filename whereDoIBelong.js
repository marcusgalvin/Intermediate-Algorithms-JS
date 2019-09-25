function getIndexToIns(arr, value) {
  //first we must sort the array into numerical order
  var sortedArray = arr.sort();
  console.log(sortedArray);

  //next we must loop though the sortedArray of numbers
  //while the value we are inserting is larger than the iteration, return the i, which refers to the index of the insertion
  var i = 0;
  while (value > sortedArray[i]) {
    i++;
  }

  return i;
}

getIndexToIns([40, 60], 50);
