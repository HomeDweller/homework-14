//task 1
/*
let a = 0.1;
let b = 0.2;
let sum = a + b;
alert( +sum.toFixed(2) );
*/
//task 2
/*
let a = "1";
a = Number(a);
let b = 2;
alert(a + b);
*/
//task 3
/*
let gigabytes = +prompt("Вкажіть обсяг флешки (в гігабайтах)");
let megabytes = gigabytes * 1024;
alert("На флешці помістяться " + megabytes / 820 + " файлів");
*/
//task 4
/*
let money = +prompt("Вкажіть кількість грошей");
let price = +prompt("Вкажіть ціну однієї шоколадки");
let candies = money / price;
let remainder = money % price;
alert("Ви купите " + Math.floor(candies) + "шоколадок");
alert("У вас залишиться " + remainder + " гривень");
*/
//task 5
/*
let rev = 0;
let num = +prompt("Вкажіть тризначне число");
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}
alert(+rev);*/
//task 6
/*
let deposit = +prompt("Введіть суму вкладу в банк");
let percent = deposit / 100;
let monthPercent = 5 * percent / 12;
let take = deposit + 2 * monthPercent;
alert("Через два місяці, ви зможете забрати " + take + " гривень");
*/