//Task 1
let x = 20,
    y = 58,
    z = 42;
console.log(x + y + z);

//Task 2
let str = "Привет",
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";
console.log(typeof(str));
console.log(typeof(sum));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));

//Task 3
let numSecInMin = 60,
    numMinInHour = 60,
    numHourInDay = 24,
    numDaysInYear = 365,
    myAge = 29,
    myAgeInSeconds;
let numSecInYear = numSecInMin * numMinInHour * numHourInDay * numDaysInYear;
myAgeInSeconds = numSecInYear * myAge;
console.log(myAgeInSeconds);

//Task 4
let count = 42,
    userName = "42";
let count1,
    count2;
count1 = "" + count;
count2 = String(count);
console.log(count1, typeof(count1), count2, typeof(count2));

let userName1,
    userName2;
userName1 = +userName;
userName2 = Number(userName);
console.log(userName1, typeof(userName1), userName2, typeof(userName2));

//Task 5
let a = 1;
let b = 2;
let c = "белых медведей";
d = String(a);
c = " белых медведей";
console.log(d + b + c);

//Task 6
let word1 = "доступ",
    word2 = "морпех",
    word3 = "наледь",
    word4 = "попрек",
    word5 = "рубило";
let lengthWords = word1 + word2 + word3 + word4 + word5;
console.log(lengthWords.length);

//Task 7
let var1 = "name",
    var2 = 2022,
    var3 = true;
console.log("Variable: " + var1 + " have type: " + typeof(var1));
console.log("Variable: " + var2 + " have type: " + typeof(var2));
console.log("Variable: " + var3 + " have type: " + typeof(var3));

//Task 8
let question1 = prompt("Ваше имя?");
let question2 = prompt("Сколько вам лет?");
console.log(question1);
console.log(question2);

//Task 9
let a1 = 5 % 3,
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

//ADVANCED level

//Task 1
let q = 4;
let w = 3;
[w, q] = [q, w];
console.log(q, w);

//Task 2 
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1.substring(1, 2) + codeWord2.substring(1, 2) + codeWord3.substring(1, 2) + codeWord4.substring(1, 2) + codeWord5.substring(1, 2);
console.log(cipher);



