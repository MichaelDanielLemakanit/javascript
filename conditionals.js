// let x = Number(prompt("enter a random number: "))

// if (x % 2 == 0){
//     console.log("Even Numaber")

// }
// else{
//     console.log("Odd Number")

// }

// let even = x % 2 == 0 ? "Even Number" : "Odd Number"
// console.log(even)

// let x = Number(prompt("Please enter your age:"));

// let citizen = x >= 18 ? "Eligible to vote" : "Not Eligible to Vote, you must be 18 and above";

// console.log(citizen);
// alert(citizen); 

// let num1 = Number(prompt("Entern num1"))
// let num2 = Number(prompt("Entern num2"))
// let num3 = Number(prompt("Entern num3"))

// if ((num1 > num2) && (num1 > num3)){
//     console.log("Num1 is the largest")
// }
// else if ( ("Num2 is the largest")){
//     console.log("Num2 is the largest")
// }
// else{
//     console.log("Num3 is the largest")
// }

// 1.  Create a variable and console log whether a number is odd or even


// let num = Number(prompt("Enter numer"))

// if (num % 2 == 0){
//     console.log("Even Number")
// }
// else {
//     console.log("odd number")
// }

//2.  Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
// const a = Number(prompt("Enter any number"))
// const b = Number(prompt("Enter any number"))
// const c = Number(prompt("Enter any number"))

// let largest;

// if (a > b && a > c) {
//     largest = a;
// } else if (b > a && b > c) {
//     largest = b;
// } else {
//     largest = c;
// }

// console.log("The largest number is:", largest);


// Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.

// const year = Number(prompt("Enter any Year: "))

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }


// Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,if the temperature   is above 15 display “Normal temperature” otherwise display “Cold temperature”

// const user_temperature = Number(prompt("Enter temperature: "))

// if (user_temperature >= 30){
//     console.log("The temperature is too high")
// }
// else if (user_temperature >= 15 ){
//     console.log("Normal Temperature")
// }
// else {
//     console.log("cold Temperature")
// }

// Write a js program that checks if a variable x is between 10 and 20 (inclusive) and if another variable y is greater than 100. If both conditions are true, display"Conditions met", otherwise display"Conditions not met"

// const x = Number(prompt("Enter Number: "))
// const y = Number(prompt("Enter Number: "))

// if (x >= 10 && x <= 20 && y > 100) {
//     console.log("Conditions met");
// } else {
//     console.log("Conditions not met");
// }

// Write a js program that checks if a variable password is equal to the string "secret123". If it is, display "Access   granted", otherwise display"Access denied"

// const user_password = Number(prompt("Enter password: "))
// const secret = "secret123";

// if (user_password === secret){
//     console.log("access granted");
// }else{
//     console.log("access dinied");
// }


// Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise display "Good score, but attendance needs improvement"

const student_score = Number(prompt("Enter student score: "));
const attendance = Number(prompt("Enter student attendance: "));

if (student_score > 90 && attendance > 80) {
    console.log("Excellent student");
} else if (student_score > 90 && attendance <= 80) {
    console.log("Good score, but attendance needs improvement");
} else {
    console.log("Score does not meet the excellent threshold.");
}