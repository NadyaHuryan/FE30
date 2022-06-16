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

