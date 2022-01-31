const a = 7;
const b = 9;
console.log("a * b =", a * b);

const c = 100;
const d = 25;
console.log("c / d =", c / d);

const e = 12;
const f = 65;
console.log("e + f =", e + f);

// 4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

const num1 = 11;
const bool = true;
const js = "java script";
const string = "100";

console.log(typeof num1, typeof bool, typeof js, typeof string);

// 5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num = ++num;
num = --num;

////////////

const userNumber = Number(prompt("Give me your userNumber"));

alert(userNumber ** 2);

/////////////

const average1 = Number(prompt("Tell me any number"));
const average2 = Number(prompt("Tell me any number"));

alert((average1 + average2) / 2);

///////////

const minsec = Number(prompt("How many minutes?"));
alert("In seconds it");
alert(minsec * 60);

///////////

const greeting = "Hello,";
const userName = prompt("What is your name?");

alert(greeting + userName);

////////////

const userAge = Number(prompt("Tell me any number"));

if (userAge) {
  console.log(userAge === 10);
} else {
  console.log(userAge != 10);
}

////////////

const test = true;
if (test) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

if (test != true) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//////////////

//3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн.,
//а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

const purchaseAmount = Number(prompt("What is your purchase amount?"));

if (purchaseAmount >= 500 && purchaseAmount < 800) {
  console.log(purchaseAmount - (purchaseAmount / 100) * 3);
} else purchaseAmount >= 800;
{
  console.log(purchaseAmount - (purchaseAmount / 100) * 5);
}

////////////
//Таски на циклы.
//Каждую задачу решить циклами while, for.

//1) Вывод чисел от 25 до 0 (порядок уменьшения).

//2) Вывод чисел от 10 до 50, которые кратны 5.

//3) Найти сумму чисел в пределах от 1 до 100.

//Таски на switch..case.

//1) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например,
// если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default).

const dayWeek = Number(prompt("Какой сейчас день недели?"));

switch (dayWeek) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default:
    console.log("Нет такого дня недели");
}

//2) В переменной day лежит какое-то число из интервала от 1 до 31. Определите, в какую декаду месяца
//попадает это число (в первую, вторую или третью).

const dayNumber = 17;

switch (true) {
  case dayNumber >= 1 && dayNumber <= 10:
    console.log("Первая декада");
    break;
  case dayNumber >= 11 && dayNumber <= 20:
    console.log("Вторая декада");
    break;
  case dayNumber >= 21 && dayNumber <= 31:
    console.log("Третья декада");
    break;
  default:
    console.log("Операция не корректна");
}

//Таски на циклы.
//Каждую задачу решить циклами while, for.

//1) Вывод чисел от 25 до 0 (порядок уменьшения).

let firstNumber = 25;
const lastNumber = 0;

while (firstNumber >= lastNumber) {
  console.log(firstNumber);
  firstNumber--;
}

const m = 25;

for (let i = m; i > 0; i--) {
  console.log(i);
}

//2) Вывод чисел от 10 до 50, которые кратны 5.

let firstNumber1 = 10;
const lastNumber2 = 50;
while (firstNumber1 <= lastNumber2) {
  if (firstNumber1 % 5 === 0) {
    console.log(firstNumber1);
  }
  firstNumber1++;
}

const numberUser = 50;

for (let i = 5; i <= numberUser; i += 5) {
  console.log(i);
}
//3) Найти сумму чисел в пределах от 1 до 100.

let sum = 0;

for (let i = 1; i <= 100; ++i) {
  sum = sum + i;
  console.log(sum);
}

let sum1 = 0;
let firstNumber2 = 1;

while (firstNumber2 <= 100) {
  sum1 = firstNumber2 + sum1;
  console.log(sum1);
  firstNumber2++;
}
