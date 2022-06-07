// Task 1 
    let x = 20,
        y = 58;
        z = 42;
    let math = x + y + z;
    console.log (math);

// Task 2
    let str='Привет',
        sum = 123,
        num = 15.8,
        flag = true,
        txt = 'true';
    console.log( typeof(str));
    console.log( typeof(sum));
    console.log( typeof(num));
    console.log( typeof(flag));
    console.log( typeof(txt));

//  Task 3

const min = 60,
    sec = 60,
    hour = 60,
    day = 24,
    year = 365, 
    myAge = 20;
    

let myAgeInSeconds = 20 * year * day * hour * min * sec ;
console.log (myAgeInSeconds);

//  Task 4 
let count = 42,
    userName = '42',
    countStr = ''+42,
    countStr2 = String(42),
    userNameNum = Number('42'),
    userNameNum2 = +'42';

// Task 5
let a = 1,
    b = 2,
    c = "белых медведей";

console.log (`${a}${b} ${c}`);
// или
console.log (String(a) + String(b) + ' ' + c);

// Task 6 
let word1 = 'доступ',
    word2 = 'морпех',
    word3 = 'наледь',
    word4 = 'попрек',
    word5 = 'рубило',
    lengthWords = word1 + word2 + word3 + word4 + word5;
    console.log(lengthWords.length);

// Task 7 
let myNumber = 2,
    myString = 'Liza',
    myBoolean = true;
console.log (`Variable: myNumber have type: `+ typeof(myNumber));
console.log (`Variable: myString have type: `+ typeof(myString));
console.log (`Variable: myBoolean have type: `+ typeof(myBoolean));

// Task 8

let yourName = prompt ('Как вас зовут?');
let yourAge = prompt ('Сколько вам лет?');

console.log (
`Ваше имя: ${yourName}, 
Ваш возраст: ${yourAge}.`);

// Task 9
let a1 = 5 % 3,
a2 = 3 % 5,
a3 = 5 + '3',
a4 = '5' - 3,
a5 = 75 + 'кг',
a6 = 785 * 653,
a7 = 100 / 25,
a8 = 0 * 0,
a9 = 98 + 2,
a10 = 5 - 98,
a11 = (8 + 56 * 4) / 5 ,
a12 = (9 - 12) * 7 / (5 + 2) ,
a13 = +"123" ,
a14 = 1 || 0,
a15 = false || true,
a16 = true > 0,
a17 = 0 / 2,
a18 = 89 / 0;

console.log ( a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
console.log ( typeof(a1));
console.log ( typeof(a2));
console.log ( typeof(a3));
console.log ( typeof(a4));
console.log ( typeof(a5));
console.log ( typeof(a6));
console.log ( typeof(a7));
console.log ( typeof(a8));
console.log ( typeof(a9));
console.log ( typeof(a10));
console.log ( typeof(a11));
console.log ( typeof(a12));
console.log ( typeof(a13));
console.log ( typeof(a14));
console.log ( typeof(a15));
console.log ( typeof(a16));
console.log ( typeof(a17));
console.log ( typeof(a18));

// Task 1
    let aA = 4;
    let bB = 3;
    aA = bB++;
    console.log (aA, bB);

// Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] +codeWord5[1];
console.log(cipher);