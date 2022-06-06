// Task 1
{
    let x = 20;
    let y = 58;
    let z = 42;
    let sum = x + y + z;
    console.log(`Сумма: ${sum}`);
}
    // Task 2 @ Типа так просто не до конца понял ДЗ 2
{
    let str = 'Привет';
    let sum = 123;
    let num = 15.8;
    let flag = true;
    let txt = 'text';
    console.log(typeof(str), typeof(sum), typeof(num), typeof(flag), typeof(txt),);
}
    // Task 3
{
    const secInMin = 60;
    const minInHr = 60;
    const hrInDay = 24;
    const dayInYear = 365;
    let userAge = 23;
    console.log('Твой возраст в сек: ' + (userAge * dayInYear * hrInDay * minInHr * secInMin));
}
    // Task 4
{
    let count = 42;
    let userName = '42';
    console.log(typeof(Number(userName)));
    console.log(typeof(+userName));
    
    console.log(typeof('' + count));
    console.log(typeof(String(count)));
}
    // Task 5
{
    let a = 1;
    let b = 2;
    let c = "белых медведей";
    console.log(`${a}${b} ${c}`);
    console.log(a + (b + c));
}    
    //Task 6
{
    // 1 method
        let access = 'доступ'; 
        let soldier = 'морпех';
        let ice = 'наледь';
        let reproach = 'попрек';
        let chopped = 'рубило';
    
        let lengthWords = access.length + soldier.length + ice.length + reproach.length + chopped.length;
        console.log(lengthWords);
}
{
    // 2 method
        let arrWords = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];
        let sumArr = '';
        for (let i = 0; i < arrWords.length; i++) { 
            sumArr += arrWords[i];
        }
        console.log(sumArr.length);
}
{
    // 3 method
    let arrWords = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];
    let sumArr = '';
    for (value of arrWords) {
        sumArr += value;
    }
    console.log(sumArr.length);
}
//Task 7
{   
    let boolean = true;
    let str = 'just string';
    let num = 1900;
    console.log(`%variable%:${boolean} %Type%:${typeof(boolean)}`);
    console.log(`%variable%:${str} %Type%:${typeof(str)}`);
    console.log(`%variable%:${num} %Type%:${typeof(num)}`);
}
//Task 8
{
    let userName = prompt('Введите свое имя', 'Иван');
    let userAge = +prompt('Введите ваш возраст', '18');
    console.log(`${userName} тебе ${userAge} лет`);
}
//Task 9
{
    let a1 = 5 % 3; // num 1
    let a2 = 3 % 5; // num 0
    let a3 = 5 + '3'; // str '53'
    let a4 = '5' - 3; // num 2
    let a5 = 75 + 'kg'; // str 75kg
    let a6 = 785 * 653; // num 51260500
    let a7 = 100 / 25; // num 4
    let a8 = 0 * 0; //num Infintiy
    let a9 = 0 / 2; //num Infinity
    let a10 = 89 / 0; // num Infintiy
    let a11 = 98 + 2; // num 100
    let a12 = 5 - 98; // num -93
    let a13 = (8 + 56 * 4) / 5; // num 46.40
    let a14 = (9 - 12) * 7 / (5 + 2); // num -3
    let a15 = +"123"; // num 123
    let a16 = 1||0; // boolean true
    let a17 = false||true; //boolean true
    let a18 = true > 0 // true 1 > 0;
    console.log(typeof(a18));
}
//! Advanced level
//Task1 
{
// 1 method
    let a = 4; //3
    let b = 3; //4
    b = a; //b = 4;
    --a; // a = 3;
    console.log(`value a = ${a}`, `value b =  ${b}`);
}
// 2 method
{
    let a = 4;
    let b = 3; 
    a = a + b; //7
    b = a - b; //4
    a = a - b; //3
    console.log(`value a = ${a}`, `value b =  ${b}`);
}
//Task2
{
// 1 method
    let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";
    let resultCodeWord = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1];
    console.log(resultCodeWord);
}
{
// 2 method  error
// let codewordArr = ['обернись', 'неужели', 'огурцы', 'липкие', '?!'];
// let resultCodeWord = '';
// for (let i = 0; i < codewordArr.length - 1; i++) {
//     for (let j = 0; j < codewordArr.length - 1; j++) {
//         resultCodeWord += codewordArr[i][j];
//     }
// }
// console.log(resultCodeWord);
}