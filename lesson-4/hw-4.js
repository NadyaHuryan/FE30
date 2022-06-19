'use strict'
// add-hw
// userName = "Andrew";
// function showMessage2() {
//     console.log(userName) // Andrew
//     userName = "Pete"; // Andrew = Pete
//     console.log(userName) // Pete
//     if (true) {
//         console.log(userName); // Andrew err Pete
//         userName = "John";
//         console.log(userName) // John
//     }
//     console.log(userName) // Pete  err John
// }

// showMessage2();
// console.log(userName) // Andrew err John

//task1
{
let sum = 0;
function getSum(num) {
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum
}
console.log(getSum(20)); //@ почему 210 выводятся не понял я думал что будет 1010
}
//task2
{
let sumCredit = +prompt ('Введите сколько денег вы хотите взять в кредит в тенге', 100000);    
function calcCredit(sum, year, percent) {
    if (isNaN(sumCredit)) {
        return 'Прошу ввести сумму'
    } else {
        sum = sumCredit;
        return ((sum / 100) * percent ) * year;
    }
}
let creditResult = calcCredit(1, 5, 17);
let totalCredit = (sumCredit + creditResult);
alert('Переплата по кредиту составит: ' + creditResult + ' тенге');
}

//task3
{
function trimString(str, from, to) {
    return str.substr(from, to);

}
console.log(trimString('Я люблю футбол', 0, 4));
}

//task4 err @ немогу понять в чем дело
{
function getSumNum(num) {
    if(isNaN(num)) {
        return `Это не число: ${num}`
    } else {
        let sum = 0;
        for (let i = 0; i <= num.length; i++) {
            sum += num[i];
        }
        return sum
    }
}
console.log(getSumNum(2011));
// task5 
{
function getSum(a, b) {
    if (a < b || b < a){
        if (a < b) {
            for (let i = a; i <= b; i++) {
                a += b[i];
                return b;
            }
        } else {
            for (let i = b;  i <= a; i++) {
                b += a[i];
                return a;
            }
        }
    }else if (a > b || b > a) {
        return a + b;
    }else {
            return `Since both are same`;
        }
}
console.log(getSum(-1, 2));
}
// task6
function foo() {
    return foo;
}
function boo() {
    return boo;
}
function fooboo(foo, boo) {
    if (foo === true) {
        return `foo: ${foo}`;
    } else if (boo === true) {
        return `boo: ${boo}`;
    } else {
        return 'Данные значения не имеются'
    }
}
console.log(fooboo(true, true));

// ad level 1
