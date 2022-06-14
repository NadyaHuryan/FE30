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
