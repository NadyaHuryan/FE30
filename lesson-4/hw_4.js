"use strict"
let yourNumber = +prompt("введите число");
let sum = 0;
function getSum(){
    for(let i = 0; i<=yourNumber; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
getSum();

//Task 2 

function loanCalculator(){
    let amountOfLoan = prompt("Введите сумму кредита");
    let loanPrecent = 0.17;
    let loanDuration = prompt("На сколько лет вы планируете брать кредит?");
    let overpay = 0;
    if (isNaN(amountOfLoan)) {
        return "Введите сумму коректно";
    } for (i = loanDuration; i > 0; i--) {
        overpay = amountOfLoan * loanPrecent * loanDuration;
        console.log(overpay);
    }
    return "переплата составит" + " " + overpay;
    }
    alert (loanCalculator());

    //Task 3

    let yourString = prompt("введите слово");
    let from = prompt("от");
    let to = prompt("по");
    function trimString(){
        if(from > 0, to > 0){
            return yourString.substring(from, to);
        }
    return yourString;
}
alert (trimString());

    //Task 4 
    
    function getSumNumbers(a){
        let sum = 0;
        while (a) {
            sum = eval(a.toString().split("").join('+'));
            break;
        }
        return sum;
    }
    console.log(getSumNumbers(2028));

    // Task 5
    function getSum2(a,b) {
        let sum = 0;
        if (a > b) {
            for(let i = b; i <= a; i++) {
                sum = sum + i;
            } return sum;
            } else if (a < b) {
                for(let i = a; i <= b; i++) {
                    sum = sum + i;
                }return sum;
            } else {
            } return a;
        }
    console.log(getSum2(1,5));
    // Task 6

    const boo = function() {
        console.log("boo");
        }
        const foo = function() {
        console.log("foo");
        }
        const fooboo = function(flag, foo, boo) {
        if (flag == true) {
            foo();
        } else {
            boo();
        }
        }
        fooboo(true, foo, boo);

    //Task 7
    function checkTriangle(a,b,c) {

        if (a == 0 || b == 0 || c == 0) {
            console.log("ошибка");
        } else if (a + b > c || a + c > b || b + c > a) {
            console.log("Есть треугольник");
        } 
        else {
            console.log("netu");
        }
    }
    console.log(checkTriangle(3,2,2));

    //Task 8
    function calcChocolate(n,m) {
        if(n <= 0 || m <= 0) {
            return 0;
        }
        else {
            let sum = (n - 1) + (m - 1);
            return sum;
        }
    }
    console.log(calcChocolate(3,5));
    //Task 9
