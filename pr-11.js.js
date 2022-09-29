var a=parseInt(prompt("Enter a"));
var b=parseInt(prompt("Enter b"));

function fact(a) {
    var ans=0;
    if(a==1 || a==0){
        return 1;
    }
    for (let i = a; i > 1 ; i--) {
                ans = i*fact(i-1);
    }
    return ans;
}

var choice=prompt("Enter the choice 1)add \n 2)sub \n 3)mul \n 4)div \n 5)fact");
switch(choice){
    case '1':
        console.log(a+b);
        break;
    case '2':
        console.log(a-b);
        break;
    case '3':
        console.log(a*b);
        break;
    case '4':
        console.log(a/b);
        break;
    case '5':
        fact(a);
        break;
        
    default:
        console.log("Enter valid choice");
        break;
        
}
