// #### Task 1 💻
let sum = 0;
const getSum = function (until) {
    for (i = 1; i <= until; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(+prompt('введите число'));

// #### Task 2 💻
let result2;
const countCredit = function (sum, years) {
    let rate = 0.17;
    return result2 = sum * years * rate;
}
let amount = countCredit(+prompt('введите сумму кредита'), +prompt('введите количество лет возврата'));
console.log(amount);

// #### Task 3 💻
let stringLength1 = prompt('введите строку');
let trimFirst = +prompt('введите параметр в ввиде числа, с которого вы бы хотеле обрезать введённую выше строку', '0');
let trimSecond = +prompt('введите параметр в ввиде числа, по которое вы бы хотеле обрезать введённую выше строку', '2');
const trimString = function (stringLength, valueFrom, valueTo) {
    return stringLength.slice(valueFrom, valueTo);
}
let result3 = trimString(stringLength1, trimFirst, trimSecond);
console.log(result3);

// #### Task 4 💻
let sum4 = 0;
const getSumNumbers = function (figure) {
    let arr = figure.split('');
    for (i = 0; i < arr.length; i++) {
        sum4 = sum4 + +(arr[i]);
    };
    return sum4;
}
let result4 = getSumNumbers(prompt('введите число'));
console.log(result4);

#### Task 5 💻
let sum5 = 0;
const getSum5 = function (a, b) {
    if (a !== b) {
        if (a > b) {
            for (; b <= a; b++) {
                sum5 += b;
            }
        } else if (a < b) {
            for (; a <= b; a++) {
                sum5 += a;
            }
        }
    } else {
        sum5 = a;
    }
    return sum5;
}
let keepGetSum5 = getSum5(+prompt('введите число'), +prompt('введите число'));
alert(keepGetSum5);

#### Task 6 💻(Изучить как передавать функцию в качестве параметра)

const foo = function() {
    console.log('foo')
}
const boo = function() {
    console.log('boo')
}
let pox;
const getFooBoo = function(firstOption, secondOption, bool) {
    bool = confirm('если ок то фуу, если нет то буу')
    if (bool) {
        firstOption()
    } else {
        secondOption()
    }
}
getFooBoo(foo, boo, pox)

// ### ADVANCED level

// #### Task 1 👨‍🏫 
let firstSide = +prompt('введите первую сторону треугольника');
let secondSide = +prompt('введите первую сторону треугольника');
let thirdSide = +prompt('введите первую сторону треугольника');
const checkBuiltTriangle = function(a,b,c) {
    if ((a+b> c) && (b+c > a) && (a+c > b)) {
        alert('треугольник можно построить')
    } else {
        alert('построить треугольник невозможно')
    }
}
checkBuiltTriangle(firstSide, secondSide, thirdSide)