// Task1
let height = 15;
let width = 20;
// method 1
if (height > width) {
    console.log(`height ${height} больше чем width ${width}`);
} else if (height === width) {
    console.log(`height ${height} и width ${width} равны`);
} else {
    console.log(`width больше: ${width} чем height ${height}`);
}
// method 2
let result = (height > width) ? console.log(`height больше: ${height} чем width`) : console.log(`width больше: ${width} чем height`);
// Task2
// method 1
let sum = 0;
for (let i = 0; i <= 5; i++) {
    sum += i;
}
console.log(sum);


// Task 3
// method 1
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
// method 1
if (key && documents && pen && (apple || orange)) {
    console.log('Ты все взял и можешь идти на работу');
} else {
    console.log('Проверь еще раз ты ничего не забыл');
}
// method 3 теренарный опреатор
let shouldGoToWork = (key && documents && pen && apple || orange) ? console.log('Ты все взял и можешь идти на работу') : console.log('Проверь еще раз ты ничего не забыл');

// Task 5 
let num = +prompt('Введите число', 100);
for (let i = 0; i < num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`FizBuz ${i}`);
    } else if (i % 3 === 0) {
        console.log(`Buz ${i}`);
    } else if (i % 5 === 0) {
        console.log(`Fiz ${i}`);
    }
}
// Task 6
let userAge = +prompt('Введите ваш возраст', 17);
if (userAge >= 18) {
    console.log('Доступ разрешен');
} else if (userAge >= 16 && userAge <= 18) {
    console.log('Уже почти');
} else {
    console.log('Доступ запрещен');
} 
// Task 7
let userAnswer = prompt('В какую сторону света хочешь отпраиться', 'восток');
switch (userAnswer) {
    case 'восток':
    case 'Восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    case 'запад':
    case 'Запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'север':
    case 'Север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'юг':
    case 'Юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    default: 
        console.log('Введите корректные данные');
        break;
}
// ad level
// task 1
// { error @ Надежда можешь дать подсказку ) не хочется списывать ( из лайва )
// let userInfo1 = +prompt('value in number1');
// let userInfo2 = +prompt('value in number2');
// let sum = 0;
// while (true) {
//     if ((userInfo1 === null || userInfo1 === 0) && (userInfo2 === null || userInfo2 === 0) ) {
//         userInfo = +prompt('value in number');
//         if (!isNaN(userInfo1 && userInfo2)) {
//             continue;
//         }
//     } else if (isNaN(userInfo1) && isNaN(userInfo2)) {
//         console.log('Введите число');
//         break;
//     } else {
//         sum += userInfo1 + userInfo2;
//     }
// }
// let aSum = userInfo1 / userInfo2;
// let tSum = userInfo1 + userInfo2;
// console.log(`ариф сумм: ${aSum}, общ сумм: ${tSum}`);
// }

//task2
{
let userInfo = +prompt ('Введите число');
let userMin = +prompt(`${userInfo} Сколько отнять`);
let userPlus = +prompt(`(${userInfo} - ${userMin}) Сколько прибавить`);
let userMul = +prompt(`(${userInfo} - ${userMin}) + ${userPlus} на сколько умножить`);
console.log(`Твоя формула: (${userInfo} - ${userMin}) + ${userPlus} * ${userMul} / 2`);
console.log((((userInfo - userMin) + userPlus) * userMul) / 2);
}
// task3 
{
let sym = '#';
let num = 6;
let sum = '';
for (let i = 0; i <= num; i++) {
    sum += sym;
    console.log(sum);
}
}