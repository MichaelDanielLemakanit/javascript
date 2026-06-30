// Functions Task on slide 83 -> intermediate questions do the following: 1,2,4,7 -> using functions
// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    let area = 0.5 * base * height;
    return area;
}

// Prompting the user for inputs
let userBase = prompt("Enter the base of the triangle:");
let userHeight = prompt("Enter the height of the triangle:");

// Converting input strings to numbers and calculating area
let resultArea = calculateTriangleArea(Number(userBase), Number(userHeight));

// Displaying the result
console.log("The area of the triangle is: " + resultArea);
alert("The area of the triangle is: " + resultArea);

// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Prompting the user for a number
let userNumber = prompt("Enter a number to check if it's even or odd:");

// Running the function and showing the result
let determination = checkEvenOrOdd(Number(userNumber));
console.log("The number is " + determination);
alert("The number is " + determination);




let email = prompt("Enter email");

function verify_email(email) {
    let result
    if (email.includes("@") && email.includes(".")) {
        result = "valid email"
    } else {
        result = "Invalid email"
    }
    return result
}

let check_mail = verify_email(email)
console.log(check_mail)

// Function to determine the grade based on marks
function calculateGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) { // > 49 means 50 and above
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E"; // Less than 40
    }
}

// Prompting the user for marks
let studentMarks = prompt("Enter student marks (0 to 100):");
let numericMarks = Number(studentMarks);

// Validating that the input is a proper number within the valid range
if (numericMarks >= 0 && numericMarks <= 100) {
    let finalGrade = calculateGrade(numericMarks);
    console.log("The correct grade is: " + finalGrade);
    alert("The correct grade is: " + finalGrade);
} else {
    console.log("Please enter a valid score between 0 and 100.");
    alert("Please enter a valid score between 0 and 100.");
}