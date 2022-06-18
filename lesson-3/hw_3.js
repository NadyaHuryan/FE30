let height = 15, width = 20;
if(height < width) {
    console.log("ширина 20");
}

let sum = 0;
for(i = 0; i <= 5; i++){
    sum = sum + i;
}
console.log(sum);

for(i = 1; i <= 20; i++){
    if(i % 3 == 0)
console.log(i);{
    continue;
}
}

let key = true, documents = true, pen = true, apple = false, orange = true;
let shouldGoToWork = key && documents && pen || apple || orange;
console.log(shouldGoToWork);

let num = prompt("Введите число");
if(num % 5 == 0 && num % 3 == 0){
    console.log("FizBuz");
} else if(num % 5 == 0){
    console.log("Fiz");
} else if(num % 3 == 0){
    console.log("Buz");
}

let age = prompt("Введите Ваш возраст");
if(age > 18){
    alert("Доступ разрешен");
}  else if(age <= 15){
    alert("Доступ запрещен");
}  else if(age == 16, 17, 18){
    alert("Уже почти");
} 

let side = prompt("Сторона света");
switch(side){
    case 'юг':
    alert("на юг пойдешь счастье найдешь");
    break;
    case 'север':
    alert("на север пойдешь много денег найдешь");
    break;
    case 'запад':
    alert("на запад пойдешь верного друга найдешь");
    break;
    case 'восток':
    alert("на восток пойдешь разработчиком станешь");
    break;
    default:
    alert("попробуйте еще раз");
}

