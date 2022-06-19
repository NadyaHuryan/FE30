//Task 1
let height = 15;
let width = 20;
if (width > height) {
    console.log("ширина - " + width);
} else if (height > width) {
    console.log("высота - " + height);
} else {
    console.log("Ерунду не пишем :)");
}


//Task 2
let sum = 0,
    i;
for (i = 1; i <= 5; i++){
    sum = sum + i;
    console.log(`Сумма чисел ${sum}`);
}


//Task 3
for (i = 1; i <= 20; i++){
    if (i % 3 !== 0){
        continue;
    }
console.log(i);
}

//Task 4
let key = true,
    documents = true,
    pen = true,
    apple = false,
    orange = true;
let shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork == true){
    console.log("Всё взял");
} else {
    console.log("Что-то не взял");
}


//Task 5
let requestedNum = +prompt(`введите число`);
if (requestedNum % 5 == 0 && requestedNum % 3 == 0) console.log(`FizBuz`);
else {
    if (requestedNum % 5 == 0) console.log(`Fiz`);
    if (requestedNum % 3 == 0) console.log(`Buz`);
}



//Task 6
let age = +prompt(`Сколько тебе лет?`);
if (age > 18) console.log(`Доступ разрешен`);
else {
    console.log(`Доступ запрещен`);
    if (age >= 16 || age < 18) console.log(`Уже почти`);
}



//Task 7
let ourQuestion = prompt("В какую сторону света хочешь отправиться?");
    switch(ourQuestion) {
        case `юг`: 
            console.log(`на юг пойдешь счастье найдешь`)
            break;
        case `север`: 
            console.log(`на север пойдешь много денег найдешь`)
            break;
        case `запад`: 
            console.log(`на запад пойдешь верного друга найдешь`)
            break;
        case `восток`: 
            console.log(`на восток пойдешь разработчиком станешь`)
            break;
        default:
            console.log(`попробуй ещё раз`)
            break;
    }


