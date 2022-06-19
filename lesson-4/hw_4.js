"use strict";

//NORMAL level
//Task 1
let i = 1;
function getSum() {
    let num = +prompt("Введите число", "50"),
        sum = 0,
        i = 0;
    if (isNaN(num)) {
        alert("Ошибка ввода");
    } else {
        for (i = 0; i <= num; i++) {
            sum += i;
        }
        alert(`Сумма чисел в ${num} равна ${sum}`);
    }
}
getSum();

//Task 2
let creditAmount = +prompt("Введите желаемую сумму кредита, BYN", "5000");
const overpaymentOnALoan = function() {
    if (isNaN(creditAmount)) {
        return "Сумма введена некорректно";
    } else {
        const loanRate = 17,
            creditTerm = 5;
        let amountPerYear = creditAmount / creditTerm,
            overpayment = 0;
        for (i = creditTerm; i > 0; i--) {
            overpayment += (amountPerYear * i) * (loanRate / 100);
            console.log(overpayment);
        }
        return `Переплата по кредиту составит ${(overpayment).toFixed(2)} BYN`; //применил округление до сотых
    }
};
alert(overpaymentOnALoan(creditAmount));

//Task 3
let str = "" + prompt("Введите строку", "Привет, друг!"),
    a = +prompt("До какого символа обрезать начало строки?", "1"),
    b = +prompt("С какого символа обрезать окончание строки?", "15");
const trimString = function() {
    if (isNaN(a) || isNaN(b)) {
        return "Введите номера символов корректно"
    } else {
        return str.slice(a, b); //оператор для извлечения фрагмента строки
    }
};
alert(trimString(str, a, b));

//Task 4
let numbers = prompt("Введите цифру", "2022")
const getSumNumbers = function() {
    if (isNaN(+numbers)) {
        return "Вы ввели не число!";
    } else {
        let сharacters = numbers.length,
            sumNumbers = 0;
        for (i=0; i < сharacters; i++) {
            sumNumbers += +numbers[i];
        }
        return `Сумма чисел в ${numbers} равна ${sumNumbers}`;
    }
};
alert(getSumNumbers(numbers));

//Task 5
let x = +prompt("Задайте первое целое число", "1"),
    y = +prompt("Задайте второе целое число", "15");
const getSum1= function() {
    if (isNaN(x) || isNaN(y)) {
        return "Вы ввели числа некорректно";
    } else if (x == y) {
        return x;
    } else if (x < y){
        let increaseAmount = 0;
        for (i=x; i <= y; i++) {
            increaseAmount += i;
            console.log(increaseAmount);
        }
        return increaseAmount;
    } else {
        let reductionAmount = 0;
        for (i=x; i >= y; i--) {
            reductionAmount += i;
            console.log(reductionAmount);
        }
        return reductionAmount;
    }
};
alert(getSum1(x, y));

//Task 6
const foo = function() {
    return("foo");
};
const boo = function() {
    return("boo");
};
let trueFalse = prompt("Введите 0 или 1")
const fooboo = function() {
    if (trueFalse == true) {
        return foo();
    } else {
        return boo();
    }
};
alert(fooboo(trueFalse, foo(), boo()));

//ADVANCED level
//Task 1
//a<b+c и b<a+c и c<a+b - формула для проверки существования треугольника
let a1 = +prompt("Введите длину первой стороны", "3"),
    b1 = +prompt("Введите длину второй стороны", "4"),
    c1 = +prompt("Введите длину третьей стороны", "5");
const triangleExists = function() {
    if (a1 < b1 + c1 && b1 < a1 + c1 && c1 < a1 + b1) {
        return true;
    } else {
        return false;
    }
};
alert(triangleExists(a1, b1, c1));

//Task 2
let x1 = Math.round(+prompt("Введите ширину шоколадки", "3")),
    y1 = Math.round(+prompt("Введите длину шоколадки", "5")); //округление до целого числа, на случай если у шоколадки есть дробные части
const numberOfBreaks = function() {
    if (isNaN(x1) || isNaN(y1) || x1 <= 0 || y1 <= 0) {
        return 0;
    } else {
        let breaksInWidth = x1 - 1,
        breaksInlength = (y1 - 1) * x1;
        return breaksInWidth + breaksInlength;
    }
};
alert(numberOfBreaks(x1, y1));

//Task 3
let accountBalance = +prompt("Введите сумму на покупки, BYN", "3000");
    const pricePhone = 800,
        priceHeadphones = 100,
        taxRate = 20;
const tax = function(t) {
    return t * (taxRate/100);
};
const price = function(p) {
    return `${(p).toFixed(2)} BYN`;
};
const purchases = function() {
    let totalPrice = 0;
    let phoneAndHeadphones = pricePhone + priceHeadphones;
    phoneAndHeadphones += tax(phoneAndHeadphones);
    i = 0;
    while (totalPrice <= accountBalance) {
        i++;
        totalPrice = phoneAndHeadphones * i;
    }
    return `Вы можете купить ${i-1} телефонов с наушниками на сумму ${price(totalPrice - (totalPrice / i))}`;
};
alert(purchases());