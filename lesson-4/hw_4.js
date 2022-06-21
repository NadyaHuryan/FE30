"use strict";

//NORMAL level
//Task 1
let i = 1;
function getSum(num) {
    let sum = 0,
        i = 0;
    if (isNaN(num)) {
        return "Ошибка ввода";
    } else {
        for (i = 0; i <= num; i++) {
            sum += i;
        }
        return sum;
    }
}
console.log(getSum(100));

//Task 2
const overpaymentOnALoan = function(creditAmount) {
    if (isNaN(creditAmount)) {
        return "Сумма введена некорректно";
    } else {
        const loanRate = 17 / 100,
            creditTerm = 5;
        let amountPerYear = creditAmount / creditTerm,
            overpayment = 0;
        for (i = creditTerm; i > 0; i--) {
            overpayment += (amountPerYear * i) * loanRate;
        }
        return overpayment.toFixed(2);
    }
};
console.log(overpaymentOnALoan(5000));

//Task 3
const trimString = function(str, a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Введите номера символов корректно"
    } else {
        return str.slice(a, b); //работает: вычленяет часть строки от a до b (не включая b)
    }
};
console.log(trimString("Привет!", 2, 4));

//Task 4
const getSumNumbers = function(numbers) {
    if (isNaN(numbers)) {
        return "Вы ввели не число";
    } else {
        numbers = "" + numbers;
        let сharacters = numbers.length,
            sumNumbers = 0;
        for (i=0; i < сharacters; i++) {
            sumNumbers += +numbers[i];
        }
        return sumNumbers;
    }
};
console.log(getSumNumbers(2022));

//Task 5
const getSum1= function(x, y) {
    if (isNaN(x) || isNaN(y)) {
        return "Вы ввели числа некорректно";
    } else if (x == y) {
        return x;
    } else if (x < y){
        let increaseAmount = 0; //Тут код не одинаковый
        for (i=x; i <= y; i++) { //Этот цикл считает, когда x < y
            increaseAmount += i;
        }
        return increaseAmount;
    } else {
        let reductionAmount = 0;
        for (i=x; i >= y; i--) { //А этот, когда x > y
            reductionAmount += i;
        }
        return reductionAmount;
    }
};
console.log(getSum1(2, 6));

//Task 6
const foo = function() {
    return "foo";
};
const boo = function() {
    return "boo";
};
const fooboo = function(bool, foo, boo) {
    if (bool) {
        return foo();
    } else {
        return boo();
    }
};
console.log(fooboo(true, foo, boo));

//ADVANCED level
//Task 1
//a<b+c и b<a+c и c<a+b - формула для проверки существования треугольника
const triangleExists = function(a1, b1, c1) {
    if (a1 < b1 + c1 && b1 < a1 + c1 && c1 < a1 + b1) {
        return true;
    } else {
        return false;
    }
};
console.log(triangleExists(3, 4, 5));

//Task 2
const numberOfBreaks = function(x1, y1) {
    if (isNaN(x1) || isNaN(y1) || x1 <= 0 || y1 <= 0) {
        return 0;
    } else {
        let breaksInWidth = x1 - 1,
        breaksInlength = (y1 - 1) * x1;
        return breaksInWidth + breaksInlength;
    }
};
console.log(numberOfBreaks(3, 7));

//Task 3
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
    let accountBalance = +prompt("Введите сумму на покупки, BYN", "3000");
    let phoneAndHeadphones = pricePhone + priceHeadphones + tax(pricePhone + priceHeadphones);
    let totalPrice = 0;
    i = 0;
    while (totalPrice <= accountBalance) {
        i++;
        totalPrice = phoneAndHeadphones * i;
    }
    return `Вы можете купить ${i-1} телефонов с наушниками на сумму ${price(totalPrice - (totalPrice / i))}`;
};
alert(purchases()); //не очень понял какая проверка нужна.