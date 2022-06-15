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
    sum = sum + i;
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

    let b = +prompt("Введите число");
    if (b%5 == 0 && b%3 == 0) {
        alert('FizBuz');
    } else if (b%3 == 0) {
        alert('Buz');
    } else if (b%5 == 0) {
        alert('Fiz');
    } else {
        alert('Введите корректное значение!');
    }


    //####Task6

    let q = +prompt("Введите Ваш возраст:");
    if (q > 16 && q < 18) {
        alert('Уже почти');
    } else if (q > 18) {
        alert('Доступ разрешен!');
    } else {
        alert('Доступ запрещен!');
    }

    //####Task7

    let sideOfTheWorld = prompt("Введите сторону света:");
switch(sideOfTheWorld) {
    case 'юг':
        console.log("на юг пойдешь счастье найдешь!")
        break;
    case 'север':
        console.log("на север пойдешь много денег найдешь!")
        break;
    case 'запад':
        console.log("на запад пойдешь верного друга найдешь!")
        break;
    case 'восток':
        console.log("на восток пойдешь разработчиком станешь!")
        break;
    default:
        console.log("Введите корректное значение");
        break;
}