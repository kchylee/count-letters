function countLetters(inputStr){ //Takes string input
//Return objects containing all unique characters as KEYS
//and numbers of appearance as VALUE
  var str = inputStr.split(" ").join("");
  var uniqueLetters = {};

  for (var i = 0; i < str.length; i++){
    if (!uniqueLetters[str[i]]){
      uniqueLetters[str[i]] = 1;
    }else{
      uniqueLetters[str[i]] += 1;
    }
  }
  return uniqueLetters;
}

console.log(countLetters("lighthouse in the house"));