/// Task 1

let x = 20;
let y = 58;
let z = 42;
console.log(x + y + z);

///Task 2

let str = "Привет";
let sum = 123;
let num = 15.8;
let flag = true;
let txt = "true";
console.log(typeof(str));
console.log(typeof(sum));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));

///Task 3

let secInMin = 60;
let minInHour = 60;
let hourInDay = 24;
let dayInYear = 365;

let myAgeYear = 26;

let myAgeInSeconds = (myAgeYear * dayInYear * hourInDay * minInHour * secInMin );
console.log(myAgeInSeconds);

//Task 4

let count = 42;
let userName = '42';

console.log(typeof(String(count)));
console.log(typeof("" + count));

console.log(typeof(Number(userName)));
console.log(typeof(+userName));

//Task 5

let a = 1;
let b = 2;
let c = "белых медведей"



console.log("" + a + b + c );

//Task 6

let access = "доступ";
let marine = "морпех";
let frost = "наледь";
let reproach = "попрек";
let chop = "рубило";

let lengthWords = (access + marine + frost + reproach + chop );
console.log(lengthWords.length);

//Task 7 

let word5 = "Макет";
let num5 = 32;
let bool5 = false;

console.log("Variable:" + word5 + "have type:" + (typeof(word5)));
console.log("Variable:" + num5 + "have type:" + (typeof(num5)));
console.log("Variable:" + bool5 + "have type:" + (typeof(bool5)));



//Task 8 

let name1 = prompt("Введите ваше имя");
let age = +prompt("Введите ваш возраст");

console.log(name1);
console.log(age)


//Task 9

let a1 = 3 % 5;
console.log(a1);
console.log(typeof(a1));
let a2 = 5 + '3';
console.log(a2);
console.log(typeof(a2));
let a3 = '5' - 3;
console.log(a3);
console.log(typeof(a3));
let a4 = 75 + 'кг';
console.log(a4);
console.log(typeof(a4));
let a5 = 785 * 653;
console.log(a5);
console.log(typeof(a5));
let a6 = 100 / 25;
console.log(a6);
console.log(typeof(a6));
let a7 =0 * 0;
console.log(a7);
console.log(typeof(a7));
let a8 =0 / 2;
console.log(a8);
console.log(typeof(a8));
let a9 = 89 / 0;
console.log(a9);
console.log(typeof(a9));
let a10 = 98 + 2;
console.log(a10);
console.log(typeof(a10));
let a11 =5 - 98;
console.log(a11);
console.log(typeof(a11));
let a12 = (8 + 56 * 4) / 5;
console.log(a12);
console.log(typeof(a12));
let a13 = (9 - 12) * 7 / (5 + 2);
console.log(a13);
console.log(typeof(a13));
let a14 = +"123";
console.log(a14);
console.log(typeof(a14));
let a15 =1 || 0;
console.log(a15);
console.log(typeof(a15));
let a16 = false || true;
console.log(a16);
console.log(typeof(a16));
let a17 = true > 0.
console.log(a17);
console.log(typeof(a17));

//Advanced

///Task 1

let a01 = 4;
let b01 = 3;

[a01,b01] = [b01,a01]

console.log(a01, b01);

///Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

console.log(codeWord1[1], codeWord2[1], codeWord3[1], codeWord4[1], codeWord5[1]);