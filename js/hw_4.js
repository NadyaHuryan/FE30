// #### Task 1 💻
let sum = 0;
const getSum = function (until) {
    for (i = 1; i <= until; i++) {
        sum += i;
    }
    return sum;
}
console.log(getSum(+prompt('введите число')));

// #### Task 2 💻
const countCredit = function (sum, years) {
  let rate = 0.17;
  let notChangeSum = sum;
  let i = years * 12;
  let genneralMonthPay = sum / i;
  let currentMonth = 0;
  let totalPay = 0;
  for (; i > 0; i--) {
    currentMonth = genneralMonthPay + rate * sum;
    totalPay += currentMonth;
    sum = sum - currentMonth;
  }

  return  totalPay - notChangeSum;
};
let amount = countCredit(
  +prompt("введите сумму кредита"),
  +prompt("введите количество лет возврата")
);
console.log(amount);

// #### Task 3 💻
let stringLength1 = prompt("введите строку");
let trimFirst = +prompt(
  "введите параметр в ввиде числа, с которого вы бы хотеле обрезать введённую выше строку",
  "0"
);
let trimSecond = +prompt(
  "введите параметр в ввиде числа, по которое вы бы хотеле обрезать введённую выше строку",
  "2"
);
const trimString = function (stringLength, valueFrom, valueTo) {
  return stringLength.slice(valueFrom, valueTo);
};
let result3 = trimString(stringLength1, trimFirst, trimSecond);
console.log(result3);

// #### Task 4 💻
const getSumNumbers = function (figure) {
  let sum = 0;
  let arr = figure.split("");
  for (i = 0; i < arr.length; i++) {
    sum = sum + +arr[i];
  }
  return sum;
};
let result4 = getSumNumbers(prompt("введите число"));
console.log(result4);

// #### Task 5 💻
const getSum5 = function (a, b) {
  let sum = 0;
    if (a !== b) {
        if (a > b) {
            for (; b <= a; b++) {
                sum += b;
            }
        } else if (a < b) {
            for (; a <= b; a++) {
                sum += a;
            }
        }
    } else {
        sum = a;
    }
    return sum;
}
let keepGetSum = getSum5(+prompt('введите число'), +prompt('введите число'));
alert(keepGetSum);

// #### Task 6 💻(Изучить как передавать функцию в качестве параметра)
const foo = function() {
    console.log('foo')
}
const boo = function() {
    console.log('boo')
}
let pox = confirm('если ок то фуу, если нет то буу');
const getFooBoo = function(firstOption, secondOption, bool) {
    if (bool) {
        firstOption()
    } else {
        secondOption()
    }
}
getFooBoo(foo, boo, pox)

// ### ADVANCED level

// #### Task 1 👨‍🏫
let firstSide = +prompt('введите первую сторону треугольника');
let secondSide = +prompt('введите первую сторону треугольника');
let thirdSide = +prompt('введите первую сторону треугольника');
const checkBuiltTriangle = function(a,b,c) {
    if ((a+b> c) && (b+c > a) && (a+c > b)) {
        alert('треугольник можно построить')
    } else {
        alert('построить треугольник невозможно')
    }
}
checkBuiltTriangle(firstSide, secondSide, thirdSide)

// #### Task 2 👨‍🏫
let getCrashChocolate = function (x, y) {
  if(x && y) {
    let advancedResult2 = x * y - 1;
    console.log(advancedResult2);
  } else {
    console.log('получается шоколадки нет')
  }
  
};
getCrashChocolate(
  +prompt("введите первую сторону размера шоколадки"),
  +prompt("введите вторую сторону размера шоколадки")
);
