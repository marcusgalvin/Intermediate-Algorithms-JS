function reverseString(str) {
  //split the string into comma seperated chars
  let array = str.split("");
  console.log(array);

  //reverse the new array
  let reverseArray = array.reverse("");
  console.log(reverseArray);

  //use .join() to turn the array back into a str and print
  let joinArray = reverseArray.join("");
  console.log(joinArray);

  return joinArray;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
