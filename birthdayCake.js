function candles(arr) {
  var result = [];
  var highestNum = Math.max(...arr);
  console.log(highestNum);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === highestNum) {
      result.push(arr[i]);
    }
  }
  console.log(result.length);
  return result.length;
}

candles([4, 4, 1, 2]);
