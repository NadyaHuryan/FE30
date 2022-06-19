// Task 1
'use strict';
let n = +prompt("Введите число");
function getSum(n) {
    let i, sum = 0;
    for (i = 0; i<=n ; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(n);

// // Task 2

// 'use strict';
let c = +prompt("Введите сумму кредита");
function getCredit(c) {
    let b = 0.17,
        y = 5,
        paymentForYear = c / y,
        overPayment = 0;
    for (i = y; i > 0; i--) {    //когда режим use strict выбивает ошибку, что не находит переменную i, но я пробовала ее объявить и все равно ошибку, а без этого режима все работает
        overPayment += paymentForYear * i * b;
        console.log(overPayment);
    }
}
console.log(getCredit(c));

// // Task 3
'use strict';
let str  = prompt("Введите слово"),
    d = +prompt('Введите значение от'),
    l = +prompt('Введите значение до');
const trimString = function (str, d, l) {
    if (str.length > l) {
        return str.slice(d, l);
    } else {
        return str;
    }
}
trimString(str, d, l);
let str2 = trimString(str, d, l);
console.log(str2);

// // Task 4
// // смотрела вариант решения, кто-то сбрасывал в чат, не понимаю как с length это работает.

// // Task 5
let a = +prompt('Введите первое число'),
    b = +prompt('Введите второе число');

function getSum2(a, b) {
    let i, sum = 0;
    for (i = a; i<=b ; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum2(a, b);

const getSum3 = function (a, b) {
    if (a == b) {  
        return a && b;
    } else {
        return getSum2;   //нет проверки если b > a
    }
}
getSum3(a, b);

// // Task 6
let t = true,
    nameFunction1 = 'foo',
    nameFunction2 = 'boo';
const foo = function (nameFunction1){
    console.log(nameFunction1);
}
foo(nameFunction1);

const boo = function (nameFunction2){
    console.log(nameFunction2);
}
boo(nameFunction2);

const fooboo = function (t, foo, boo){
    if(t){
        console.log(foo()); // выводит undefined, не понимаю почему
    } else {
        console.log(boo());
    }
}
fooboo(t, foo, boo);




