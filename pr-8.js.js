var string=prompt("Enter the sentence:");
var words=string.split(' ');
words.sort();
console.log("The sorted order of sentence is: ");
for(const i of words){
    console.log(i);
}