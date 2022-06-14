//####Task1
let height = 15,
    width = 20;
if (width > height) {
    console.log('ширина - ' + width);
} else { console.log('высота - ' + height);
}

//####Task2

let sum = 0,
    i = 1;
for (i = 1; i <= 5; i++) {
    sum = sum + i
console.log(`${i} сумма чисел ${sum}`);
}

//####Task3

for (y=0; y<=20; y++) {
    if (y%3 !== 0) {
        continue;
    }
    console.log(y);
}

//####Task4

let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true,
    shouldGoToWork = key && documents && pen && (apple || orange);
    if (shouldGoToWork) {
    console.log("ты взял все!");
    } else { console.log("ты зыбыл!");
    }

    //####Task5

    let b = +prompt("ВВедите число");
    if (b%5 == 0 && b%3 == 0) {
        alert('FizBuz');
    } else if (b%3 == 0) {
        alert('Buz');
        } else if (b%5 == 0) {
            alert('Fiz');
            } else {
            alert('Введите корректное значение!')
            }

