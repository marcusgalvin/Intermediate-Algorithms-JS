//thinking about filtering out this array to find the boolean values
//Filter works by iterating over an array and passing the elements in the array 1 by 1 through a function
//The elements that “pass” the test are then returned
//then use an if statement?

function bouncer(array) {
  return array.filter(function(element) {
    //element is = to each specific element in the given array
    // console.log(element)
    //if the element is not a boolean value, then just return the given element
    if (element !== Boolean) {
      console.log(element);
      return element;
    }
  });

  // return array;
}

bouncer([7, "ate", "", false, 9]);
