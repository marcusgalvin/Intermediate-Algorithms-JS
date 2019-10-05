function binaryAgent(str) {

  var res = []
  
  //have to split 
  var splitArray = str.split(' ')
  console.log(splitArray)
  
  //loop thru the split array
  for (var i = 0; i < splitArray.length; i++){
  
  //find the unicode vale of each sub array in split array
  var digit = parseInt(splitArray[i], 2)
  // console.log(digit)
  
  //convert the decimal/number values into english letters
  var charCode = String.fromCharCode(digit)
  console.log(charCode)
  // console.log(typeof charCode)
  
  //push back into global res array
  var push = res.push(charCode)
  
  
  //end loop
  }
  console.log(res)
  
  //join back into a string
  var answer = res.join('')
  
  
  
    return answer;
  }
  
  
  
  
  
  
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");