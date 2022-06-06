let x = 20;
let y = 58;
let z = 42;
console.log(x+y+z);

let str = 'привет';
let sum = 123;
let num = 15.8;
let flag = true;
let txt = 'true';
console.log(typeof str);
console.log(typeof sum);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

let secInMin = 60;
let minInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let myAge = 25;
console.log(myAge*daysInYear*hoursInDay*minInHour*secInMin);
let myAgeInSeconds = (myAge*daysInYear*hoursInDay*minInHour*secInMin);

let count = 42;
let userName = '42';
console.log(typeof +userName);
console.log(typeof Number(userName));
console.log(typeof String(count));
console.log(typeof num.toPrecision(count));

let a = 1;
let b = 2;
let c = "белых медведей";
console.log(String(a)+String(b)+c);

let access = "доступ";
let soldier = "морпех";
let ice = "наледь";
let transverse = "попрек";
let axe = "рубило";
let lengthWords = (access.length + soldier.length + ice.length + transverse.length + axe.length);
console.log(lengthWords);

let first = `Variable: %variable name% have type: %type variable%`;
var second = `Variable: %variable name% have type: %type variable%`;
const third = `Variable: %variable name% have type: %type variable%`;
console.log(first);
console.log(second);
console.log(third);


let fullName = prompt('Ваше имя?');
let years = prompt('Сколько вам лет?');
console.log(fullName);
console.log(years);

let a1 = 3 % 5;
let a2 = 5 + '3';
let a3 = '5' - 3;
let a4 = 75 + 'кг';
let a5 = 785 * 653;
let a6 = 100 / 25;
let a7 = 0 * 0;
let a8 = 0 / 2;
let a9 = 89 / 0;
let a10 = 98 + 2;
let a11 = 5 - 98;
let a12 = (8 + 56 * 4) / 5;
let a13 = (9 - 12) * 7 / (5 + 2);
let a14 = +"123";
let a15 = 1 || 0;
let a16 = false || true;
let a17 = true > 0;
console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17);
console.log(typeof a1,
    typeof a2,
    typeof a3,
    typeof a4,
    typeof a5,
    typeof a6,
    typeof a7,
    typeof a8,
    typeof a9,
    typeof a10,
    typeof a11,
    typeof a12,
    typeof a13,
    typeof a14,
    typeof a15,
    typeof a16,
    typeof a17,);


    let switch1 = 4;
    let switch2 = 3;
    switch1 = switch1 + switch2;
    switch2 = switch1 - switch2;
    switch1 = switch1 - switch2;
    console.log(switch1,switch2);

    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
    console.log(codeWord1.charAt(1),
    codeWord2.charAt(1),
    codeWord3.charAt(1),
    codeWord4.charAt(1),
    codeWord5.charAt(1)
    );
