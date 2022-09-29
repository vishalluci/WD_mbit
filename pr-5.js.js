//program to check weather number is prime or not

const no=prompt("Enter the number: ");
let flag=true;
if(no===1){
    console.log("1 is neither prime nor composite number.");
}
else if(no>1){
    for (let i = 2; i < no;i++){
        if(no%i==0){
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log(`${no} is prime number.`);
    }
    else{
        console.log(`${no} is not a prime number.`);
    }
}