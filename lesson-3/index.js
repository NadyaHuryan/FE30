//#### Task 1 💻
let height = 15;
let width = 20;
(res => {
    switch (res) {
        case 15:
            console.log('height');
            break;
        case 20:
            console.log('width');
            break;
    }
    console.log(res)
})(Math.max(height, width))

//#### Task 2💻
function sumTo(n) {
    return n * (n + 1) / 2;
}
var a1 = 1
console.log(sumTo(a1));
var a2 = 2
console.log(sumTo(a2));
var a3 = 3
console.log(sumTo(a3));
var a4 = 4
console.log(sumTo(a4));
var a5 = 5
console.log(sumTo(a5));

//#### Task 3 💻

const calc = (n, maxNum) => {
    let number = [];
    for (let i = 1; i < maxNum; i++) {
        if (i % n === 0) {
            number.push(i);
        }
    }
    return number;
}

console.log(calc(3, 20));

//#### Task 4 💻

let key = true;
documents = true;
pen = true;
apple = false;
orange = true;
let shouldGoToWork = key && documents && pen && apple || orange
console.log(shouldGoToWork)

//#### Task 5 💻

let number = prompt("Укажите любое число");




let message = (prompt % 3 == 0) ? 'Вы ещё молоды!' : 'Какое программирование, ты уже старый для этого!)';
alert(message);