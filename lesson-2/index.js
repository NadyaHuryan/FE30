console.log("Hello world")
let x = 20,
    y = 58,
    z = 42;
console.log(y + z + x)
let str = "Привет",
    sum = 123,
    num = 15.8,
    flag = true,
    txt = "true";
console.log(typeof(str))
console.log(typeof(sum))
console.log(typeof(num))
console.log(typeof(flag))
console.log(typeof(txt))

let secondInMinute = 60,
    minuteInHour = 60,
    hourInDay = 24,
    dayInYear = 365,
    myAge = 30,
    myAgeInSeconds = (secondInMinute * minuteInHour * hourInDay * dayInYear * myAge);
console.log(myAgeInSeconds)

let count = 42
count = String(count); /*изменил тип на строку */
count = `${count}` /*изменил тип на строку 2й способ */
console.log(typeof(count));

let userName = '42' * 1 //изменил тип на число 1-й способ
userName = Number(userName); //изменил на число 2-й способ
console.log(typeof(userName))

let a = 1
let b = 2
let c = "белых медведей"
    //let d = (a + (b + " " + c)) //добавил пробел как одно из слагаемых. Правильно ли так?
let d = `${a}${b} ${c}`
console.log(d)


let A = "доступ"
let B = "морпех"
let C = "наледь"
let D = "попрек"
let I = "рубило"
let lengthWords = A + B + C + D + I
console.log(lengthWords.length);

let type1 = "Variable: %variable name% have type: %type variable%"
console.log(type1)
console.log(typeof(type1));
let type2 = ["Variable: %variable name% have type: %type variable%"]
console.log(type2)
console.log(typeof(type2));
let type3 = "Variable: % variable name % have type: % type variable %"
if (type3 < 1) {
    greeting = "Variable: %variable name% have type: %type variable%";
} else {
    greeting = "Variable: %variable name% have type: %type variable%"
}
console.log(type3)
console.log(typeof(type3 < 18));


let name = prompt("Как вас зовут?"),
    age = +prompt('Какой ваш возраст?', 30);

alert(`Привет, ${name}!`);
let message = (age < 30) ? 'Вы ещё молоды!' : 'Какое программирование, ты уже старый для этого!)';
alert(message);



let a1 = 3 % 5;
console.log(a1)
console.log(typeof(a1));
let a2 = 5 + '3';
console.log(a2)
console.log(typeof(a2));
let a3 = '5' - 3;
console.log(a3)
console.log(typeof(a3));
let a4 = 75 + 'кг';
console.log(a4)
console.log(typeof(a4));
let a5 = 785 * 653;
console.log(a5)
console.log(typeof(a5));
let a6 = 100 / 25;
console.log(a6)
console.log(typeof(a6));
let a7 = 0 * 0;
console.log(a7)
console.log(typeof(a7));
let a8 = 0 / 2;
console.log(a8)
console.log(typeof(a8));
let a9 = 89 / 0;
console.log(a9)
console.log(typeof(a9));
let a10 = 98 + 2;
console.log(a10)
console.log(typeof(a10));
let a11 = 5 - 98;
console.log(a11)
console.log(typeof(a11));
let a12 = (8 + 56 * 4) / 5;
console.log(a12)
console.log(typeof(a12));
let a13 = (9 - 12) * 7 / (5 + 2);
console.log(a13)
console.log(typeof(a13));
let a14 = +"123";
console.log(a14)
console.log(typeof(a14));
let a15 = 1 || 0;
console.log(a15)
console.log(typeof(a15));
let a16 = false || true;
console.log(a16)
console.log(typeof(a16));
let a17 = true > 0.
console.log(a17)
console.log(typeof(a17));