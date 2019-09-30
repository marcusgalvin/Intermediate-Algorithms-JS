function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  for (var item = 0; item < collection.length; item++) {
    var isGood = true;
    for (var key = 0; key < keys.length; key++) {
      if (!collection[item].hasOwnProperty(keys[key])) {
        isGood = false;
        break;
      }
      // key exists
      if (collection[item][keys[key]] !== source[keys[key]]) {
        isGood = false;
        break;
      }
    }
    if (isGood) {
      arr.push(collection[item]);
    }
  }

  // Only change code above this line
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
