//Task 1
let x = 20;
y = 58;
z = 42;
sum2 = x + y + z;
console.log(sum2);

//Task 2
let str = 'Привет';
let sum = 123;
let num = 15.8;
let flag = true;
let txt = 'true';
console.log(str, typeof (str));
console.log(sum, typeof (sum));
console.log(num, typeof (num));
console.log(flag, typeof (flag));
console.log(txt, typeof (txt));

//Task 3
let s = 60;
m = 60;
h = 24;
d = 365;
let myAgeInSeconds = 26 * d * h * m * s;
console.log(myAgeInSeconds);

//Task 4
let count = 42;
userName = '42';
let countSTR1, countSTR2, userNameNum1, userNameNum2;
countSTR1 = "" + count;
countSTR2 = String(count);
console.log(countSTR1, typeof (countSTR1), countSTR2, typeof (countSTR2));
userNameNum1 = +userName;
userNameNum2 = Number(userName);
console.log(userNameNum1, typeof (userNameNum1), userNameNum2, typeof (userNameNum2));

//Task 5
let a = 1;
b = 2;
let aSTR, bSTR;
aSTR = String(a);
bSTR = String(b);
let c = " белых медведей";
let u = aSTR + bSTR + c;
console.log(u);

//Task 6
let q = 'доступ';
w = 'морпех';
e = 'наледь';
r = 'попрек';
t = 'рубило';
let lengthWords = q.length + w.length + e.length + r.length + t.length;
console.log(lengthWords);

//Task 7
let variable1 = 'Masha';
variable2 = 26;
variable3 = true;
console.log('Variable: ' + variable1 + ' have type: ' + typeof (variable1));
console.log('Variable: ' + variable2 + ' have type: ' + typeof (variable2));
console.log('Variable: ' + variable3 + ' have type: ' + typeof (variable3));

//Task 8
//let inputUserName = prompt("Введите ваше имя");
//let inputUserAge = +prompt("Введите ваш возраст");
//alert(
//    `Ваше имя - ${inputUserName}
//Ваш возраст - ${inputUserAge}`
//);

//Task 9
let a1 = 5 % 3;
    a2 = 3 % 5;
    a3 = 5 + '3';
    a4 = '5' - 3;
    a5 = 75 + 'кг';
    a6 = 785 * 653;
    a7 = 100 / 25;
    a8 = 0 * 0;
    a9 = 0 / 2;
    a10 = 89 / 0;
    a11 = 98 + 2;
    a12 = 5 - 98;
    a13 = (8 + 56 * 4) / 5;
    a14 = (9 - 12) * 7 / (5 + 2);
    a15 = +"123";
    a16 = 1 || 0;
    a17 = false || true;
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
let p = 4;
let f = 3;
p = p + f; 
f = p - f; 
p = p - f;
console.log(p);
console.log(f);

//Task 2
let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";
let cipher = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
console.log(cipher);
