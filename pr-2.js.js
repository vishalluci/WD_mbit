//Program to swap two variables in JS
var a=prompt("Enter number-1: ");
var b=prompt("Enter number-2: ");
var temp;
console.log("Numbers before swapping are: ",a,b);
//swap
temp=a;
a=b;
b=temp;

console.log("Numbers after swapping are: ",a,b);