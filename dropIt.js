/////

//first thoughts are to use shift() or slice
//and a for loop/ while loop, key word iterated in instructions
//shift() removes the element ar index 0 of an array and then shifts all other elements left into their -1 position

//there is a function within a function here, and we must run the function until the array can return true

/////

function dropElements(arr, func) {
  //while the function is false in arr index 0
  while (!func(arr[0])) {
    //basically just keep shifting in the loop until the correct element is in position 0
    arr.shift();
  }

  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
