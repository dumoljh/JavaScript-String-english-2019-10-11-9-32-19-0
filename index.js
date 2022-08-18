// Complete the following procedure, the 'name' variable in all letters to uppercase,
// output: ' 'HELLO' '.
var name = 'hello';
console.log("' '" + name.toUpperCase() + "' '")


// Complete the following procedure, capitalizing all the words in the variable sentence 
//and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
console.log(capitalizingFirstWords(sentence))

function capitalizingFirstWords(words) {
   var separateWord = words.toLowerCase().split(' ');
   for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   return separateWord.join(' ');
}

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.replace( /^\D+/g, ''))
