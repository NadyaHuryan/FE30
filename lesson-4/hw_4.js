"use strict"

function getSum(n) {
    return n * (n + 1) / 2;
}
console.log( getSum(69) );



const calcPay = function(a , b , c){
    return a * b * c;
}
console.log(calcPay(6900 , 0.17 , 5));


const trimString = function (num3, str, num2){ 
    if (str.length > num2){ 
    return str.slice(num3, num2); 
    } else { 
    return str; 
    }
};
console.log(trimString(2,'здравствуй', 7));


const getSumNumbers = function(num1){
    let sum1 = 0;
    for (let i of num1){
        sum1 = sum1 + (+i);
    }
    return sum1
};
console.log(getSumNumbers('6969'));



const getSum1 = function(x, y){
    if(x == y){
        return (x || y);
    } else if(x > y){
        return (x);
    } else{
        return (x + y) * (y - x + 1) / 2;
    }
};
console.log(getSum1(6 , 9));



let numb = 5 > 4;
let fooboo = (numb) ?
function() { console.log("foo"); } :
function() { console.log("boo"); };

fooboo(); 

