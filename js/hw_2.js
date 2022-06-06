// #### Task 1 💻
let x = 20,
    y = 58,
    z = 42;
console.log(x + y + z);
let sum = x + y + z;
console.log(sum);

// #### Task 2 💻
let str = 'привет',
    sum1 = 123,
    num = 15.8,
    flag = true,
    txt = 'true';
console.log(typeof (str), typeof (sum1), typeof (num), typeof (flag), typeof (txt))

// #### Task 3 💻
const amountSecInMin = 60,
    amountMinInHour = 60,
    amountHourInDay = 24,
    amountDatInyear = 365;
let myAge = 26;
let myAgeInSeconds = amountSecInMin * amountMinInHour * amountHourInDay * amountDatInyear;
console.log(myAgeInSeconds);

// #### Task 4 💻
let count = 42;
let userName = '42';
console.log(typeof ('' + count), typeof (String(count)), typeof (+userName), typeof (Number(userName)));

// #### Task 5 💻
let a = 1;
let b = 2;
let c = "белых медведей";
console.log(`${a}${b} ${c}`);

// #### Task 69 💻
let wrodFirst = 'доступ',
    wrodSecond = 'морпех',
    wrodThird = 'наледь',
    wrodFourth = 'попрек',
    wrodFifth = 'рубило';
let lengthWords = [wrodFirst, wrodSecond, wrodThird, wrodFourth, wrodFifth]
console.log(lengthWords.length)
let lengthLitterWords = wrodFirst + wrodSecond + wrodThird + wrodFourth + wrodFifth;
console.log(lengthLitterWords.length)

// !!! не  совсем понял какая длинна нужна, поэтмоу сделал два варианта 
// #### Task 7 💻  
let variable1 = 123;
let variable2 = '123';
let variable3 = true;
console.log(`
variable1: ${variable1} have type: ${typeof (variable1)}
variable2: ${variable2} have type: ${typeof (variable2)}
variable3: ${variable3} have type: ${typeof (variable3)}`);

// #### Task 8 💻 
let currentUserName = prompt('введите ваше имя');
let currentUserAge = +prompt('введите ваш возраст');
console.log('ваше имя: ' + currentUserName + ', ' + 'ваш возраст: ' + currentUserAge)

// #### Task 9 💻 
let a1 = 5 % 3;
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
let a17 = true > 0.
console.log(typeof (a1), typeof (a2), typeof (a3), typeof (a4), typeof (a5), typeof (a6), typeof (a7), typeof (a8), typeof (a9), typeof (a10), typeof (a11), typeof (a12), typeof (a13), typeof (a14), typeof (a15), typeof (a16), typeof (a17));

// #### Task 9 💻 
let x1 = 4;
let y1 = 3;
x1 = x1 + y1;
y1 = x1 - y1;
x1 = x1 - y1;
console.log(x1, y1)

// #### Task 10 💻 

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let chipher;
chipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);
console.log(chipher);
