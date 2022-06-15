// #### Task 1 💻
let height = 15,
    width = 20;
if (height > width) {
    console.log(`высота - ${height}`)
} else if (height == width) {
    console.log(`квадрат - стороны равны`)
} else {
    console.log(`ширина - ${width}`)
}

// #### Task 2 💻
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
    console.log(`сумма чисел из ${i} составляет ${sum}`)
}

// #### Task 3 💻
for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// #### Task 4 💻
let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true,
    shouldGoToWork;

shouldGoToWork = key && documents && pen && (apple || orange)
if (shouldGoToWork) {
    console.log(`ты всё взял`)
} else {
    console.log(`ты что-то забыл`)

}

// #### Task 5 💻
let number1 = +prompt('введите число')
if (number1 % 3 == 0 && number1 % 5 == 0 && number1 != 0) {
    alert('FizBuz')
} else if (number1 % 3 == 0 && number1 != 0) {
    alert('Buz')
} else if (number1 % 5 == 0 && number1 != 0) {
    alert('Fiz')
} else if (number1 == 0) {
    alert('вы ввели не число')
}

// #### Task 6 💻

let age = +prompt('введите ваш возраст');
if (age > 18 && number1 != 0) {
    alert('Доступ разрешён')
} else if (age <= 18 && age >= 16 && number1 != 0) {
    alert('Уже почти')
} else if (age < 18 && number1 != 0) {
    alert('Доступ запрещён')
} else {
    alert('вы не ввели число')
}

// #### Task 7 💻
let direction = prompt('Куда бы вы отправились ? Введите направление', 'юг');
switch (direction) {
    case 'юг':
        console.log('на юг пойдешь счастье найдешь')
        break;
    case 'север':
        console.log('на север пойдешь много денег найдешь')
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь')
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь')
        break;
    default:
        console.log('попробуйте ещё раз')
        break;
}

// ### ADVANCED level
// #### Task 1 👨‍🏫
let enterNumber = 1;
let sum2 = 0;
for (i = 1; enterNumber; i++) {
    enterNumber = +prompt('введите число');
    sum2 += enterNumber;
    if (isNaN(enterNumber)) {
        console.log('ошибка ввода')
        document.write('ошибка ввода');
    } else {
        console.log(`общая сумма ${sum2}, среднее арифметическое ${sum2 / i}`)
        document.write(`общая сумма ${sum2}, среднее арифметическое ${sum2 / i} `);
    }
}

// #### Task 2 👨‍🏫 
let minus, plus, multiplication, share, result1;
let number3 = +prompt('введите число');
if (!(isNaN(number3))) {
    minus = +prompt('сколько отнять?');
}
if (!(isNaN(minus))) {
    plus = +prompt('сколько прибавить?');
}
if (!(isNaN(plus))) {
    multiplication = +prompt('на сколько умножить?');
}
if (!(isNaN(multiplication))) {
    share = +prompt('на сколько разделить? ');
}
if (share) {
    result1 = `${(number3 - minus + plus) * multiplication / share}`;
    if (isNaN(result1)) {
        alert('вы ввели не  все значения')
    } else {
        alert(`((((${number3} - ${minus})+${plus})*${multiplication})/${share}) = ${result1}`);
        console.log(`((((${number3} - ${minus})+${plus})*${multiplication})/${share}) = ${result1}`);
        document.write('</br>' + `((((${number3} - ${minus})+${plus})*${multiplication})/${share}) = ${result1}` + '</br>');
    }
} else if (share == 0) {
    alert('на 0 делить нельзя')
}

// #### Task 3 👨‍🏫
let ij;
let grid = '';
let onegrid = '#'
do {
    ij = confirm('нажмите ок, если хотите рисовать лестницу');
    grid += onegrid;
    console.log(grid);
    document.write(grid + '</br>');
} while (ij)