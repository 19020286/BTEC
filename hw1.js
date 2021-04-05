//4
// alert("Hello!");
// let message = "Code the change.";
// console.log(message);
// let studentCount = 0;
// console.log(parseInt(studentCount, 10));

//5
// message = "Coding may not be easy, but fun.";
// console.log(message);
// studentCount = 16;
// console.log(studentCount);
// console.log(message.toLowerCase());
// console.log(++studentCount);

//6
// alert("You look beautiful today!");

//7
// let name = prompt("Hi there, your name please!");
// alert(`Hello ${name}`);

//8 
// let firstName = prompt("Enter your first name!");
// let lastName = prompt("Enter your last name!");
// alert(`Hello ${lastName} ${firstName} !`);

//9
// let sqSide = prompt("Enter side length of the square");
// let sqArea = Math.pow(sqSide, 2);
// alert(`The square area is ${sqArea}!`);

//10
// let radius = prompt("Enter the radius of the circle");
// let circleArea = (3.14 * Math.pow(radius, 2)).toFixed(1);
// alert(`The circle area is ${circleArea}!`);

//11
// let cTemp = prompt("Enter the temperature in Celsius!")
// let fTemp = 1.8 * cTemp + 32;
// alert(`${cTemp} (C) -> ${fTemp}` (F));

//12a
// for (i = 0; i < 7; i++) {
//     console.log(i);
// }

//12b
// let n = prompt("Enter a number?");
// for (i = 0; i < n; i++) {
//     console.log(i);
// }

//12c
// let n = prompt("Enter n");
// for (i = 3; i < n; i++) {
//     console.log(i);
// }

//12d
// let n = prompt("Enter n");
// let c = parseInt(prompt("Enter c"), 10);
// for (i = c; i < n; i++) {
//     console.log(i);
// }

//12e
// let n = prompt("Enter n");
// let c = parseInt(prompt("Enter c"), 10);
// for (i = c; i < n; i = i + 3) {
//     console.log(i);
// }

//12f
// let n = prompt("Enter n");
// let c = parseInt(prompt("Enter c"), 10);
// let s = parseInt(prompt("Enter s"), 10);
// for (i = c; i < n; i = i + s) {
//     console.log(i);
// }

//13
// let n = parseInt(prompt("Enter n"), 10);
// let factorial = 1;
// for (i = 1; i <= n; i++) {
//     factorial *= i;
// }
// alert(`The factorial of ${n} is ${factorial}`);

//14
// let age = parseInt(prompt("How old are you?"), 10);
// if (age < 14) {
//     alert("You are not old enough to view this content!");
// }
// else {
//     alert("Enjoy!");
// }

//15
// let x = prompt("Enter a number");
// if (x > 0 && x <= 4) {
//     alert("Lower half of 9");
// }
// else if (x >= 5 && x <= 9) {
//     alert("Higher half of 9");
// }
// else {
//     alert("lol");
// }

//16
// let n = parseFloat(prompt("n = "));
// let half = n / 2;
// let x = parseInt(prompt("x = ", 10));
// if (0 <= x && x <= half) {
//     alert(`${x} is in lower half of n`);
// }
// else if (half <= x && x <= n) {
//     alert(`${x} is in higher half of n`);
// }
// else {
//     alert(`lol`);
// }

//17
// let x = parseInt(prompt("x = "), 10);
// if (x % 2 == 0) {
//     alert(`${x} is an even number!`);
// }
// else {
//     alert(`${x} is an odd number!`);
// }

//18a
// for (i = 0; i < 3; i++) {
//     console.log('L');
// }
// for (i = 0; i < 3; i++) {
//     console.log('H');
// }

//18b
// let n = parseInt(prompt("n = "), 10);
// for (i = 0; i < n; i++) {
//     if (i < n / 2) console.log('L');
//     else console.log('H');
// }

//18c
// for (i = 0; i < 3; i++) {
//     console.log(0);
//     console.log(1);
// }

//18d
// let n = parseInt(prompt("n = "), 10);
// for (i = 0; i < n; i++) {
//     if (i % 2 == 0) console.log(0);
//     else console.log(1);
// }

//19
// let BMI;
// let weight = parseFloat(prompt("Your weight in kg? "));
// let height_cm = parseFloat(prompt("Your height in cm? "));
// let height_m = height_cm / 100;
// BMI = weight / (height_m * height_m);
// if (BMI < 16) {
//     alert("You are severely underweight!");
// }
// else if (BMI >= 16 && BMI < 18.5) {
//     alert("You are underweight!");
// }
// else if (BMI >= 18.5 && BMI < 25) {
//     alert("You are normal!");
// }
// else if (BMI >= 25 && BMI < 30) {
//     alert("You are overweight!");
// }
// else {
//     alert("You are obese!");
// }
// console.log(BMI.toFixed(2));