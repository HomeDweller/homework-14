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
let gigabytes = +prompt();
let megabytes = gigabytes * 1024;
alert(megabytes / 820);
*/
//task 4
/*
let money = +prompt();
let price = +prompt();
let candies = money / price;
let remainder = money % price;
alert(Math.floor(candies));
alert(remainder);
*/
//task 5
/*
let rev = 0;
let num = +prompt();
let lastDigit;

while (num != 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
}
alert(+rev);*/
//task 6
let deposit = +prompt();
let percent = deposit / 100;
let monthPercent = 5 * percent / 12;
let take = deposit + 2 * monthPercent;
alert(take);