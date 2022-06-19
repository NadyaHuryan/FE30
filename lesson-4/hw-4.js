// #### Task 1 

const getSum = function(num) {
    let sum = 0;
    for (let i = 0; i < (num + 1); i++ ){
        sum = sum + i;
    }
    return sum;
};
console.log(getSum(100)); 


// #### Task 2 

const credit = function (amount) {
    let percent = 17,
        years = 5,
        overpayment = 0,
        amountPerYear = amount / years;

    for ( i = years; i > 0; i--) {
        overpayment = overpayment + (amountPerYear * i) * (percent / 100);
    }
    return `Сумма переплаты по кредиту - ${overpayment.toFixed(2)}`;
};
console.log(credit(1000.4876)); 


// #### Task 3 💻  (использовать методы обрезки строк)

const trimString  = function(str, sliceFrom, sliceTo) {
    return str.slice(sliceFrom, sliceTo);
};
console.log(trimString('Hello, world', 2, 8));


// #### Task 4 💻(Дополнительно добавить проверку на число)

const getSumNumbers = function (num2) {
    if (isNaN(+num2)) {
        console.log('не число');
    } else {
    let sum2 = 0;
    for ( i = 0; i < num2.length; i++ ) {
        sum2 += +num2[i];
    }
    return `Сумма цифр в числе ${num2} равна ${sum2}`;
    }
};
console.log(getSumNumbers('2022')); 

// #### Task 5 💻 

const getSum2 = function(a, b) {
    let sum3 = 0;
    if (Number.isInteger(a)==false || Number.isInteger(b)==false) {
        return 'Введите целые числа';
    } else if ( a === b) {
        return `${a} Since both are same`;
    } else if (a < b) {
        for (i = a; i < (b + 1); i++){
            sum3 = sum3 + i;
        }
    } else if (a > b) {
        for (i = b; i < (a + 1); i++){
            sum3 = sum3 + i;
        }
    }
    return sum3;
};
console.log(getSum2(1,3));


// #### Task 6 💻(Изучить как передавать функцию в качестве параметра)

const foo = function () {
    console.log('foo');
    return foo;
};
const boo = function () {
    console.log('boo');
    return boo;
};
const fooboo = function (first, second, third) {
    if (typeof first !== 'boolean') {
        console.log('Первый аргумент должен иметь Boolean тип данных');
    } else if(first){
        return second();
    } else {
        return third();
    }
};
console.log(fooboo(true, foo, boo));


// #### Task 1  

const triangle = function (a1, b1, c1) {
    if ( a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1) {
        return true;
    } else {
        return false;
    }
};
console.log(triangle(8,4,6));

// #### Task 2 

const chocolate = function (m, n){
    let fracture = 0;
    if (typeof n !== 'number' || typeof m !== 'number'){
        return 0;
    } else {
        fracture = (m - 1) + (n - 1);
    }
    return fracture;
};
console.log (chocolate(3, 4)); 

