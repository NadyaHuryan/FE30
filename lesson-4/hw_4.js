'use strict';
// Normal level

// Task 1
function getSum(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    return result;
    }
console.log(getSum(+prompt("Введите число: ")));

// Task 2 
function countCredit(sum, years) {
    let rate = 0.17;
    let result = rate * sum * years;
    return result;
}
console.log(countCredit(+prompt("Введите сумму кредита: "), +prompt("Введите количество лет: ")));

// Task 3 
function trimString(string, numOne, numTwo) {
    // console.log(string.slice(numOne, numTwo));
    return string.slice(numOne, numTwo); // возвращает копию строки с вырезанными элементами 
}
console.log(trimString(prompt("Введите строку: "), +prompt("Введите число, с которого вы хотите обрезать строку: "), +prompt("Введите число, по которое вы хотите обрезать строку: "))); 

// Task 4 
function getSumNumbers(num) {
    let numString = "" + num;
    let sum = 0;
    if (isNaN(numString)) {
        return "Введите число";
    }
    for (let i = 0; i < numString.length; i++) {
        sum += +numString[i];
    }
    return sum;
}
console.log(getSumNumbers(+prompt("Введите число")));

// Task 5
function getSum(a, b) {
    let sum = 0;
    if (a > b) {
        for ( ; b <= a; b++) {
            sum += b; 
        }
    } else if (a < b) {
        for ( ; a <= b; a++) {
            sum += a; 
        }
    } else {
        sum = a; 
    }
    return sum; 
}
console.log(getSum(+prompt("Введите первое число:"), +prompt("Введите второе число:")));

// Task 6 
// const boo = function() {
//     console.log("boo");
// }
// const foo = function() {
//     console.log("foo");
// }
// const fooboo = function(flag, foo, boo) {
//     (flag) ? foo() : boo();
// }
//     fooboo(false, foo, boo);


// Advanced level

// Task 1 
function countTriagle(a, b, c) {
    if ((a+b >c) && (a+c > b) && (b+c > a)) { 
        return "Можно построить треугольник";
    } else {
        return "Нельзя построить треугольник";
    }
}
console.log(countTriagle(+prompt("Введите число:"), +prompt("Введите число:"), +prompt("Введите число:")));

// Task 2 
let result;
const countAmount = function(lengthChoc, widthChoc) { 
    if ((lengthChoc >= 1) && (widthChoc >= 1)) { // шоколадка же может быть 3 на 1 или наоборот, ниже условие, если 1 на 1 
        lengthChocolate = lengthChoc - 1;
        widthChocolate = widthChoc - 1;
        result = lengthChocolate + widthChocolate * lengthChoc;
    } else if ((lengthChoc = 1) && (widthChoc = 1)) {
        result = 0;
    } else {
        result = 0;
    }
    return result; 
}
console.log(countAmount(+prompt("Введите длину шоколадки: "), +prompt("Введите ширину шоколадки: ")));


