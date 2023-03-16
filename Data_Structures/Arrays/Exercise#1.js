// Create a Function that reverses a String:
// "Hello World!" should be:
// "!dlrow olleH"

function reverse(str){
    var splittedString= str.split('');
    var newArray=[];
    var reversedStrings;
    for (var i = splittedString.length-1;  i >-1; i-- ){
        
        newArray.push(splittedString[i]);
        
   }
  
   reversedStrings= newArray.join('')
    
   console.log(reversedStrings);
}

// by using built-in JS methods
function reverse2(str){
    return str.split('').reverse().join('');
}

// By using ES6
const reverse3 = str => [...str].reverse().join('');

reverse("Hello World!");
const reverseStr=reverse2("This is CS50!");
const reverseStr2=reverse3("Haravrd's introduction to Computer science");
console.log(reverseStr)
console.log(reverseStr2)