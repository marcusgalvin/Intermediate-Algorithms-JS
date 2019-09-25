function largestOfFour(arr) {
  //set a results variable for the end result
  var results = [];
  //set variable to each substring in the array
  //use Math.max to find the highest number in each sub array
  //push the highest number from each into a variable called results
  //return results
  var one = arr[0];
  console.log(one);
  var subArrayOneMax = Math.max(...one);
  console.log(subArrayOneMax);
  results.push(subArrayOneMax);

  var two = arr[1];
  console.log(two);
  var subArrayTwoMax = Math.max(...two);
  console.log(subArrayTwoMax);
  results.push(subArrayTwoMax);

  var three = arr[2];
  console.log(three);
  var subArrayThreeMax = Math.max(...three);
  console.log(subArrayThreeMax);
  results.push(subArrayThreeMax);

  var four = arr[3];
  console.log(four);
  var subArrayFourMax = Math.max(...four);
  console.log(subArrayFourMax);
  results.push(subArrayFourMax);

  console.log(results);

  //return
  return results;
}

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1]
]);
