// Task1
let height = 15;
let width = 20;
// method 1
if (height > width) {
    console.log(`height больше: ${height} чем width`);
} else {
    console.log(`width больше: ${width} чем height`);
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

// method 2
{
let sum = 0;
let i = 0;
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);
}

// Task 3
// method 1
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

{
// method 2
let i = 0;
while (i <= 20) {
    i++;
    // if (i % 3 === 0) {
    //     console.log(i);
    // }
    (i % 3 === 0) ? console.log(i) : console.log();  //@ получается здесь после : нужно обязательно писать else да )
}
}
// Task 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
// method 1
if (key && documents && pen && apple || orange) {
    console.log('Ты все взял и можешь идти на работу');
} else {
    console.log('Проверь еще раз ты ничего не забыл');
}
// method 2 function declaration
function checkItemWork() {
    if (key && documents && pen && apple || orange) {
        console.log('Ты все взял и можешь идти на работу');
    } else {
        console.log('Проверь еще раз ты ничего не забыл');
    }
}
checkItemWork();
// method 3 теренарный опреатор
let shouldGoToWork = (key && documents && pen && apple || orange) ? console.log('Ты все взял и можешь идти на работу') : console.log('Проверь еще раз ты ничего не забыл');

// Task 5 
let num = +prompt('Введите число', 100);
for (let i = 0; i < num; i++) {
    if (i % 5 === 0) {
        console.log(`Fiz ${i}`);
    } else if (i % 3 === 0) {
        console.log(`Buz ${i}`);
    } else {
        console.log(`FizBuz ${i}`);   // @ а что если условий больше трех 
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
