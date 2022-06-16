// Normal level

// Task 1 
    let height = 15;
    let width = 20;
    if (height > width) {
        console.log("Высота" + " - " + height);
    } else if (height < width) {
        console.log("Ширина" + " - " + width);
    } else {
    console.log("Ширина = высота" + " = " + width);
    }

    // Task 2
    let sum = 0;
    let a = 0;
    for (a = 1; ia <= 5; a++) {
        sum = sum + a;
        console.log(`В числе ${i} сумма составляет ${sum}`);
    }

    // Task 3
    for (i = 1; i <= 20; i++) {
        if (i % 3 !== 0) {
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
    let shouldGoToWork = key & documents & pen & (apple || orange);
    if (shouldGoToWork) {
        console.log("Вы все взяли.");
    } else {
        console.log("Вы что-то забыли.");
    }

    // Task 5 
    let numUser = +prompt("Введите число: ");
    if (numUser % 5 == 0 && numUser % 3 == 0) {
        alert("FizBuz");
    } else if (numUser % 5 == 0) {
        alert("Fiz");
    } else if (numUser % 3 == 0) {
        alert("Buz");
    } else {
        alert("Error");
    }

    // Task 6
    let ageUser = +prompt("Сколько вам лет?");
    if (ageUser < 18) {
        alert("Доступ запрещен");
    } else if (ageUser => 16 && ageUser <= 18) {
        alert("Уже почти");
    } else {
        alert("Доступ разрешен");
    }

    // Task 7
    let direction = prompt("В какую сторону света вы хотели бы отправиться?");
    switch (direction) {
        case "юг":
            console.log("На юг пойдешь, счастье найдешь.");
            break;
        case "север":
            console.log("На север пойдешь, много денег найдешь.");
            break;
        case "запад":
            console.log("На запад пойдешь, верного друга найдешь.");
            break;
        case "восток":
            console.log("На восток пойдешь, разработчиком станешь");
            break;
        default:
            console.log("Попробуйте еще раз");
    }


    // Advanced level

    // Task 1
    let i = 0;
    let sumTotal = 0;
    let numVisitor = +prompt ("Введите число: "); 
    if (isNaN (numVisitor)){
        alert ("Ошибка ввода");
    } else {
    while ((numVisitor != 0) && (numVisitor != null) && (numVisitor != NaN)) {
        sumTotal = sumTotal + numVisitor;
        numVisitor = +prompt ("Введите число: ");
        i++;
    } 
    alert( "Сумма чисел: " + sumTotal);         
    alert( "Среднее арифметическое: " + (sumTotal/i));    
    } 

    // Task 2 
    let num = +prompt("Введите число: ");
    let numA = +prompt("Сколько отнять от числа: ");
    let numB = +prompt("Сколько прибавить к предыдущему результату: ");
    let numC = +prompt("На сколько умножить предыдущий результат: ");
    let numD = +prompt("На сколько разделить предыдущий результат: ");
    let numResult = ((num - numA + numB) * numC) / numD;
    alert(`(((( ${num}  - ${numA} ) + ${numB}) * ${numC}) / ${numD} = ${numResult})`);

    // Task 3
    let str = "#";  
    while (str.length<=6){
    console.log(str);
    str+="#";
    }







