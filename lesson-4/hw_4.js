"use strict"

//Task 1
function getSum (n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(100));



//Task 2
function sumCredit (sum) {
    return (((sum / 100) * 17) * 5);
}
sumCredit(1000);
console.log(sumCredit(1000));



//Task 3
function trimString (myName) {
    return (myName.slice(1, 3));
}
trimString ("Alex");
console.log(trimString ("Alex"));



