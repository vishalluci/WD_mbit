function reverse(str) {
    let newString="";
    for (let i = str.length - 1; i >= 0; i--) {
        newString+=str[i];
    }
    return newString;
}
const strin=prompt("Enter the string: ");
const result=reverse(strin);
console.log(result);