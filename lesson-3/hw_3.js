    let height = 15;
    let width = 20;
    if (width > height) {
        console.log("ширина"+" = "+width);
    } else {
        console.log("длина"+" = "+height);
    }

    //task 2
    let sum = 0;
    let i = 0;
    for (i = 1; i <= 5; i++) {
        sum = sum + i;
        console.log("Число" + " " + i + " " + "сумма" + " " + sum);
    }

    //task 3
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            console.log (i)
        }
    }

    //task 4
    let key = true;
    let documents = true;
    let pen = true;
    let apple = false;
    let orange = true;
    let shouldGoToWork = key && documents && pen && (apple || orange);
    if(shouldGoToWork) {
        console.log ("Готов!");
    } else {
        console.log("Проверь!");
    }

    //Task 5 

    let yourNumber = prompt("Введите число");
    if(yourNumber % 5 == 0 & yourNumber % 3 == 0) {
        console.log("FizBuz");
    } else if(yourNumber % 3 == 0) {
        console.log("Buz");
    } else if (yourNumber % 5 == 0) {
        console.log("Fiz");
    } else {
        console.log("wrong");
    }

    //Task 6
    let yourAge = prompt("Введите ваш возраст");
    if(yourAge == 16, yourAge == 17) {
        console.log("Уже почти");
    } else if(yourAge < 18) {
        console.log("Доступ запрещен");
    } else if(yourAge >= 18) {
        console.log("Доступ разрешен");
    } else{
        console.log("Введите число");
    }

    //Task 7
    let yourDestination = prompt("В какую сторону света вы бы хотели отправиться?");
    switch(yourDestination) {
        case 'юг':
        console.log("на юг пойдешь счастье найдешь");
        break;
        case "север":
        console.log("на север пойдешь много денег найдешь");
        break;
        case "запад":
            console.log("на запад пойдешь верного друга найдешь");
            break;
        case "восток":
            console.log("на восток пойдешь разработчиком станешь");
            break;
            default:
                console.log("Попробуйте в следующей жизни");
                break;
    }

    //Task 8 



    //Task 9 
    let a = +prompt("Введите число"),
        b = +prompt("cколько отнять?"),
        c = +prompt("cколько прибавить?"),
        d = +prompt("cколько умножить?"),
        e = +prompt("cколько разделить?");
    alert("Формула - ((((a - b) + c) * d) / e), результат = " + (((a - b) + c) * d) / 2);


    //Task 10