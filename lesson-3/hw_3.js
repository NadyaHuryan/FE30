//NORMAL level

//Task 1
let height = 15,
    width = 20;
if (height == width) {
    console.log ("Высота и ширина равны" + " - " + height);
} else if (height > width) {
    console.log ("Высота" + " - " + height);
} else {
    console.log ("Ширина" + " - " + width);
}

//Task 2
let sum = 0,
    i = 0;
for (i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log (`У ${i} сумма чисел ${sum}`);
}

//Task 3
for (i = 1; i <= 20; i++) {
    if (i % 3 != 0) {
        continue;
    }
    console.log (i);
}

//Task 4
let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork) {
    console.log ("Все необходимое собрано!");
} else {
    console.log ("Мы что-то забыли!");
}

//Task 5
let num = +prompt ("Введите число");
if (num % 3 == 0 && num % 5 == 0) {
    alert ("FizBuz");
} else if (num % 5 == 0) {
    alert ("Fiz");
} else if (num % 3 == 0) {
    alert ("Buz");
} else {
    alert ("Not FizBuz");
}

//Task 6
let age = +prompt ("Введите Ваш возраст");
if (age >= 18) {
    console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен");
    if (age>=16) {
        console.log("Уже почти")
    }
}

//Task 7
let direction = prompt ("В какую сторону света Вы бы хотели отправиться?");
switch (direction) {
    case "юг":
        console.log ("на юг пойдешь счастье найдешь")
        break;
    case "север":
        console.log ("на север пойдешь много денег найдешь")
        break;
    case "запад":
        console.log ("на запад пойдешь верного друга найдешь")
        break;
    case "восток":
        console.log ("на восток пойдешь разработчиком станешь")
        break;
    default:
        console.log ("Введите направление корректно")
        break;
}

//ADVANCED level

//Task 1
let n = 0,
    sumN = 0;
while (true) {
    n = +prompt ("Введите число");
    if (n != 0) {
        if (isNaN (n)) {
            alert ("Ошибка ввода");
        } else {
            sumN = sumN + n;
            i++;
        }
    } else {
        break;
    }
}
alert (`Сумма чисел ${sumN}, среднее арифметическое чисел ${sumN / i}`);

//Task 2
let a = +prompt ("Введите число!"),
    b = +prompt ("Сколько отнять от введенного числа?"),
    c = +prompt ("Сколько прибавить к предыдущему результату?"),
    d = +prompt ("На сколько умножить предыдущий результат?"),
    e = +prompt ("На сколько разделить предыдущий результат?");
let result = (((a - b) + c) * d) / e;
alert (`Расчет выполнен по формуле (((a - b) + c) * d) / e = result, получено (((${a} - ${b}) + ${c}) * ${d}) / ${e} = ${result}`);

//Task 3
let stairs = "",
    lattice = "#";
confirm ("Построить лесенку?");
for (i=1; i<=6; i++) {
    stairs = stairs + lattice;
    document.write (`${stairs} </br>`);
}