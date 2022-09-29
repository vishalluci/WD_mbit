var char=prompt("Enter the string");
var ptr=prompt("Enter the char to find occurence in string");
var count=char.split(ptr).length-1;
console.log(`The occurance of ${ptr} in ${char} is ${count} times`);