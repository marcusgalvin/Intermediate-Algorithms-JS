function frankenSplice(arr1, arr2, n) {

  var secondArray = arr2.slice()
  console.log(secondArray)
  
  for (var i = 0; i < arr1.length; i++){
  
    console.log(arr1[i])
  secondArray.splice(n,0,arr1[i]);
    n++;
  }
  

  
    // It's alive. It's alive!
    return secondArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);