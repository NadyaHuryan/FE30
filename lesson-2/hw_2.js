// ####Task1
let x = 20,
    y = 58,
    z = 42;
console.log(x + y + z);

//####Task2
let str = "Привет";
console.log(typeof(str), str);
let sum = 123;
console.log(typeof(sum), sum);
let num = 15.8;
console.log(typeof(num), num);
let flag = true;
console.log(typeof(flag), flag);
let txt = "true";
console.log(typeof(txt), txt);

//####Task3
let secInMinut = 60,
    minInHour = 60,
    hourInDay = 24,
    dayInYear =365;

let myAge = 33;

let myAgeInSeconds = (myAge * dayInYear * hourInDay * minInHour * secInMinut);

console.log(myAgeInSeconds);

//####Task4
let count = 42
    userName = '42';
let countSTR1 , countSTR2 , userNameSTR1 ,userNameSTR2;
countSTR1 = "" + count;
countSTR2 = String(count);
console.log(countSTR1, typeof(countSTR1), countSTR2, typeof(countSTR2));

userNameSTR1 = +userName;
userNameSTR2 = Number(userName);
console.log(userNameSTR1, typeof(userNameSTR1), userNameSTR2, typeof(userNameSTR2));

//####TAsk5
let a = 1,
    b = 2,
    c = "белых медведей";
a = String(a);
b = String(b);
console.log(a + b + " " + c);

//####Task6
let word1 = "доступ",
    word2 = "морпех",
    word3 = "недель",
    word4 = "попрек",
    word5 = "рубило";
let lengthWords = word1 + word2 + word3 + word4 + word5;
console.log(lengthWords, lengthWords.length);

//####Task7
let variable1 = "text",
    variable2 = 1234,
    variable3 = true;
console.log("Variable: " + variable1 + " have type: " + variable1, typeof(variable1));
console.log("Variable: " + variable2 + " have type: " + variable2, typeof(variable2));
console.log("Variable: " + variable3 + " have type: " + variable3, typeof(variable3));

//####Task8
let nameUzer = prompt("Имя пользователя"),
    ageUzer = prompt("Введите возвраст");
console.log("Пользователь: " + nameUzer + ", " + ageUzer + " лет.");

let a1 = 5 % 3;
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'кг',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;
console.log(a1, typeof(a1));
console.log(a2, typeof(a2));
console.log(a3, typeof(a3));
console.log(a4, typeof(a4));
console.log(a5, typeof(a5));
console.log(a6, typeof(a6));
console.log(a7, typeof(a7));
console.log(a8, typeof(a8));
console.log(a9, typeof(a9));
console.log(a10, typeof(a10));
console.log(a11, typeof(a11));
console.log(a12, typeof(a12));
console.log(a13, typeof(a13));
console.log(a14, typeof(a14));
console.log(a15, typeof(a15));
console.log(a16, typeof(a16));
console.log(a17, typeof(a17));
console.log(a18, typeof(a18));

//#### ADVANCED level

//#### Task 1

let q = 4,
    w = 3;
[q, w] = [w, q];
console.log(q);
console.log(w);

//####Task2
let codeWord1 = "обернись",
    codeWord2 = "неужели",
    codeWord3 = "огурцы",
    codeWord4 = "липкие",
    codeWord5 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);