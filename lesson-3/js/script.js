//task1

let height = 15
let width = 20

if (height > width) {
    console.log ("heigh" + " - " + height);
} else {
    console.log ("width" + " - " + width);
}

//task2

let sum = 0,
i = 0;

for(i=0; i<=5; i++) {
    sum = sum + i;
    console.log (` ${i} + ${sum} = ${sum}`);
}    

//task3

for (i=0; i<=20; i++) {
    if (i % 3 == 0) continue;
    console.log(i);
}

//task4

let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = key && documents && pen && (apple || orange);
if (shouldGoToWork) {
    console.log ("Все собрал, иди!");
} else {
    console.log ("Опять, что-то забыл!");
}

//task5

let num = +prompt('Введите число');
if (num % 5 == 0 && num % 3 == 0) {
    console.log('FizBuz');
} else if (num % 5 == 0) {
    console.log('Fiz');
} else if (num % 3 == 0) {
    console.log('Buz');
}

//task6

let age = +prompt("Введите ваш возраст");
if (age >= 18) console.log("Доступ разрешен")
else {
       console.log("Доступ запрещен");
       if (age>=16) console.log("Уже почти")
}



//task7

let sides = prompt('Выберете строну света для путешествия');
switch (sides) {
    case "Юг":
        alert('на юг пойдешь счастье найдешь');
        break;
    case "север":
        alert('на север пойдешь много денег найдешь');  
        break;  
    case "Запад":
        alert('на запад пойдешь верного друга найдешь'); 
        break;
    case "Восток":     
        alert('на восток пойдешь разработчиком станешь');
        break;
    default: 
        alert('Введите коректное направление.');
        break;    
}

// advanced
//task1
