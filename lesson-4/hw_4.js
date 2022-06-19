//####Task1
let a = +prompt('Введите число');
function getSum(a) {
let sum = 0,
    i = 0;
for(i = 0; i <= a; i++) {
    sum = sum + i;
    }
    console.log(`сумма ${sum}`);
}
getSum(a)

//####Task2

let c = +prompt('сумма кредита');
function sumCredit(c) {
    return (c * 0,17 * 5);
}
sumCredit(c);
console.log(sumCredit(c));



