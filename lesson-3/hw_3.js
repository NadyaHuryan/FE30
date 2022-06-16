// Task 1
let height = 15;
let width = 20;
if (height > width) {
    console.log('height' + height);
} else { console.log('width' + width);
}

// Task 2
let num, 
    sum = 0;
for (num = 1; num <= 5; num++) {
    sum = sum + num;
    console.log (`${num} сумма чисел ${sum}`);
}


// Task 3
for(i=1; i<=20; i++) {
    if(i%3 !== 0) {
        continue;
    }
    console.log(i);
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork) {
    console.log("Ты все взял");
} else {
    console.log("Ты что-то забыл")
}

// Task 5
let a = +prompt('Введите число');
if (a%3 == 0 && a%5 == 0) {
    alert('FizBuz');
} else if (a%3 == 0) {
    alert('Buz');
} else if (a%5 == 0){
    alert('Fiz');
} else {
    alert('Введите корректное значение');
}

// Task 6
let b = +prompt('Введите Ваш возраст');
if (b >= 18) {
    alert('Доступ разрешен');
} else {
    alert('Доступ запрещен');
    if (b >= 16) {
        alert('Уже почти');
    }
}

// Task 7
let sideOfTheWorld = prompt("Введите название стороны света");
switch(sideOfTheWorld) {
    case 'юг':
        console.log("на юг пойдешь счастье найдешь");
        break;
    case 'север':
        console.log("на север пойдешь много денег найдешь");
        break;
    case 'запад':
        console.log("на запад пойдешь верного друга найдешь");
        break;
    case 'восток':
        console.log("на восток пойдешь разработчиком станешь");
        break;
    default:
        console.log("Введите корректное значение");
        break;
}

// ADVANCED level
// Task 1
let sum1 = 0, n = 0;
while (true) {
    let variable = +prompt('Введите число');
    if (variable != 0) {
        if (isNaN(variable)) {
            alert('Необходимо ввести число');
        } else {
            sum1 += variable;
            n++;
        }
    } else {break;}
}
alert(`Сумма ${sum1}, среднее арифметическое ${sum1/n}`);




