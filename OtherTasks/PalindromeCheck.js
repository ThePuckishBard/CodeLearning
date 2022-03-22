var word = 'tacocat';
var flag = true;
for (var j = 0; j < word.length / 2; j++){
    if (word.charAt(j) !== word.charAt(word.length - j - 1)){
        console.log('Not a Palindrome'); 
        flag = false;
        break;
    }
}
if (flag){
  console.log(word);  
}
