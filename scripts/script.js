//minimum
//task 1
//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.


let a = 0.1;
let b = 0.2;
let sum = a + b;
alert(+sum.toFixed(2));

//task 2
//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let d = "1";
a = Number(a);
let c = 2;
alert(d + c);

//task 3
//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let gigabytes = +prompt("Вкажіть обсяг флешки (в гігабайтах)");
let megabytes = gigabytes * 1024;
alert("На флешці помістяться " + megabytes / 820 + " файлів");

//normal
//task 1
//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

let money = +prompt("Вкажіть кількість грошей");
let price = +prompt("Вкажіть ціну однієї шоколадки");
let candies = money / price;
let remainder = money % price;
alert("Ви купите " + Math.floor(candies) + "шоколадок");
alert("У вас залишиться " + remainder + " гривень");

//task 2
//Запитай у користувача тризначне число і виведи його задом наперед.
//Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let rev = 0;
let num = +prompt("Вкажіть тризначне число");
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}
alert(+rev);
//maximum
//task 1
//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

let deposit = +prompt("Введіть суму вкладу в банк");
let percent = deposit / 100;
let monthPercent = 5 * percent / 12;
let take = deposit + 2 * monthPercent;
alert("Через два місяці, ви зможете забрати " + take + " гривень");
