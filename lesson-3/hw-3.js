// Task 1

let height = 15,
    width = 20;

if (height > width ) {
    console.log ('высота - ' + height);
} else if (height < width) {
    console.log ('ширина - ' + width);
} else {
    console.log ('ширина и выста равны - ' + width);
}

// Task 2 

let sum = 0;
for ( i = 0; i <= 5; i++ ) {
    sum = sum + i;
    console.log (sum);
}

// Task 3

for ( i = 1; i <= 20; i++ ) {
    if ( i % 3 == 0) {
        console.log (i);
    }
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork;

( key && documents && pen && (apple || orange) ) ? shouldGoToWork = 'Да' : shouldGoToWork = 'Нет';
console.log (shouldGoToWork);

// Task 5

let num = +prompt ('Введите число');

if ((num % 3 == 0) && (num % 5 == 0) ) {
    alert ('FizBuz');
} else if ( num % 5 == 0) {
    alert ('Fiz');
} else if (num % 3 == 0) {
    alert ('Buz');
} 

// Task 6

let age = +prompt ('Введите свой возраст');

if (age > 18 ){
    alert ('Доступ разрешен');
} else {
    alert ('Доступ запрещен');
    if ( age <= 18 && age >= 16) {
    alert ('Уже почти');
    }
}

// Task 7 

let side = prompt ('В какую сторону света вы бы хотели отправиться?');

switch (side) {
    case 'юг':
        console.log ('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        console.log ('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        console.log ('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log ('на восток пойдешь разработчиком станешь');
        break;
    default :
        console.log ('Пожалуйста, попробуйте еще раз');
        break;
}

// ADVANCED level
// Task 1  

// let num2 = prompt('Введите число'),
//     sum2 = 0;
//     i = 0;

// while ( num2 !== '' || '0' ) {
//     num2 = prompt('Введите число');
//     sum2 = sum2 + (+num2);
//     i++;
//     if (  +num2 == 'NaN') {
//         alert ('Ошибка ввода');
//     }
// }
// alert ('Общая сумма чисел: ' + sum2);
// alert ('Среднее арифметическое чисел: ' + (sum2 / i));

// Task 2 

let num3 = +prompt ('Введите число'),
    decrease = +prompt ('Введите число на cколько отнять'),
    add = +prompt ('Введите число на cколько прибавить'),
    multiply = +prompt ('Введите число на cколько умножить'),
    divide = +prompt ('Введите число на cколько разделить'),
    math = ((( num3  - decrease ) + add) * multiply) / divide;
    
    alert (`(((( ${num3}  - ${decrease} ) + ${add}) * ${multiply}) / ${divide} = ${math.toFixed(2)})`);

// Task 3

let sym = '#',
    ii = 0;
while ( sym.length < 7 ) {
    sym = sym + '#';
    console.log (sym);
    ii++;
}



