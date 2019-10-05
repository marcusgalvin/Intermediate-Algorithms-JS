function fearNotLetter(str) {
  // var alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,v"
  
  //asign variable of the alphabet
  var alpha = "abcdefghijklmnopqrstuvwxyz"
  //split on each letter so they can be more comparable to the test case
  var alphaSplit = alpha.split('')
  console.log(alphaSplit)
  
  //split the string aswell
  str = str.split('')
  console.log(str)
  
  var char = String.fromCharCode()
  
  
  //loop thru the str and compare
  for (var i = 0; i < str.length; i++){
  
  //if they dont equal eachother, return the skipped number
  if (str[i] != alpha[i]){
    return alpha[i]
  }
  
  }
  
  
    return alpha[i];
  }
  
  fearNotLetter("stvwx");