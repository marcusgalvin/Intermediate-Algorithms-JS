////////////////////
//object.keys returns an array of strings
//object.hasOwnProperty returns a boolean value

//but filter might make this easier
//.filter() creates a new array with elements that pass the test run by the passed in function
//can I use filter on objects?
//if so, I can run a loop through both collection & source and write an if statement on the 'i' iterator of collection and source to see if they match
//lets try

////////////////////

function whatIsInAName(collection, source) {
  var arr = collection.filter(function(name) {
    // console.log(name)
    //'name' is equal to the three objects in collection

    //loop thru
    //for loop will not work
    //for in loop?? a for in loop works on objects
    for (var i in source) {
      // console.log(collection[i])
      //must match source and name
      console.log(source[i]);
      console.log(name[i]);

      //run an if statement on objects
      //check the values in source and compare them with name
      //ex for this test case: for any time source = Capulet return true
      if (source[i] !== name[i]) {
        return false;
      }
    }
    return true;
  });

  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
