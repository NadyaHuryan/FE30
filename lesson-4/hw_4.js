// Normal level

// Task 1
function getSum(num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result += i;
    }
    console.log(result);
    return result;
    }
getSum(+prompt("Введите число: "));

// Task 2 
function countCredit(sum, years) {
    let rate = 0.17;
    let result = rate * sum * years;
    console.log(result);
}
countCredit(+prompt("Введите сумму кредита: "), +prompt("Введите количество лет: "));

// Task 3 
function trimString(string, numOne, numTwo) {
    console.log(string.slice(numOne, numTwo));
    return string.slice(numOne, numTwo);
}
trimString(prompt("Введите строку: "), +prompt("Введите число, с которого вы хотите обрезать строку: "), +prompt("Введите число, по которое вы хотите обрезать строку: "));

// Task 4 
function getSumNumbers(num) {
    let numString = "" + num;
    let sum = 0;
    for (let i = 0; i < numString.length; i++) {
        sum += +numString[i];
    }
    console.log(sum);
    return sum;
}
getSumNumbers(+prompt("Введите число"));

// Task 5
let sum = 0;
function getSum(a, b) {
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
    console.log(sum);
    return sum; 
}
getSum(+prompt("Введите первое число:"), +prompt("Введите второе число:"));

// Task 6 
let userName = "Маргарита";
const foo = function() {
    console.log(userName);
}
const boo = function() {
    console.log(userName);
}

function fooboo(bool, funcfoo, funcboo) {
if (bool = "да" || "Да") {
    funcfoo();
} else {
    funcboo();
}
}
fooboo(prompt("да/нет"), foo, boo);


// Advanced level

// Task 1 
function countTriagle(a, b, c) {
    if ((a+b >c) && (a+c > b) && (b+c > a)) {
        console.log("Можно построить треугольник");
    } else {
        console.log("Нельзя построить треугольник");
    }
}
countTriagle(+prompt("Введите число:"), +prompt("Введите число:"), +prompt("Введите число:"));


