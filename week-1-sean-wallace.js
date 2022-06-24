/// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
//const temp1 equals () and returns "42 is below boiling point" console.log the temp1
//const temp2 equals () and return "350 is above boiling point" console log the temp2
//const temp3 equals () and returns "212 is at boilin point" console log the temp3

const temp1 = () => {
    return "42 is below boiling point"
}
console.log(temp1())
const temp2 = () => {
     return "350 is above boiling point" 
}
console.log(temp2())

const temp3 = () => {
  return "212 is at boiling point"  
}
console.log(temp3())

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: let myarray equal (myNumbers1+myNumbers2) then console log (myArray and the .length of the array)


const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let myArray = (myNumbers1.concat(myNumbers2))
console.log(myArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: Use let string of const currentCohort ("Delta 2022") then string = the string and .reverse("Delta 2022) then .join("") console log (string) 

const currentCohort = "Delta 2022"
let string = ("Delta 2022")
string = [...string].reverse().join("");

console.log(string);




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: Use for, if, else, for let index = 0; then i < myArray and .length, i++ for the value before the increment. if myArray index modulo by 2 strict inequal the 0 console.log odd else if myArray i console.log even.

const myArray = [13, 34, 5, 10, 27, 42]
for(let i = 0; i < myArray.length; i++) 
   if(myArray[i] % 2 !== 0) {
      console.log(`odd`)  
    }
    else if(myArray[i]) {
        console.log(`even`)
      }
    





// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code: console.log number2-number1; console.log number3-number4

// Set one:

const number1 = 58
const number2 = 100
console.log(number2-number1)

// Set two:
const number3 = 27
const number4 = 24
console.log(number3-number4)

// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer: will push indigo to the end
// b) Verify and explain: .push places any variable to the end of a string.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: the .length counts the number of digits in the string.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: the 4 counts the letters in the string.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain:  because it string starts at 0 ruby is in 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: capitalize all caps in weekendDays
// b) Verify and explain: not gettin a output. but i think it will uppercase all in the weekendDays because of the .toUpperCase console.log.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: Number
// b) Verify and explain:Number is datatype this is a type of javascript data type.


// # ASSESSMENT 1: Tech Interview Practice Questions
// Answer the following questions.

// First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

// Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

// INSTRUCTOR EXAMPLE: What is a conditional statement?

//   Your answer: the decision a computer makes using a logic. to give an out put by using if else conditional statements.

//   Researched answer: A conditional statement is else if. if condition is true do this. Else, if the condition is false, do something different.



// 1. What is git? git is open source version control system and is a tool for source code used to devop management for projects.
//  What is the difference between git and Github?

//   Your answer: github is a website that holds repositories for developers to program and develop ideas.  

//   Researched answer: Git is software for tracking changes in a set of files. github is where developers shape the future of software.



// 2. Which JavaScript operators will return a Boolean value?

//   Your answer: boolean value represents a true or false. boolean is a form of logic. 

//   Researched answer: the logical operators in javascript &&. True if boolean is true. else then it evaluates false. Logical or true values in boolean results true values, false if both are false, represented by ||. Logical expressions return a true value expressed by true   1 or false 0 value !.



// 3. What is an index? What is the difference between index and value?

//   Your answer: an index is the indexOfmethod this returns the index; by locating the index of array 

//   Researched answer: The index: Is the index of method and searches from left to right, returns the first position of a specified value and the difference is where the value is stored.



// 4. What is iteration?

//   Your answer: iteration is the same procedure repeated.

//   Researched answer: the process of repeating a statement. by obtaining the solution of a problem in sequence.



// 5. Give a brief description of proper pair programming techniques. What are the roles of each person?

//   Your answer:Driver and and navigator: driver focus is to type the instructions from the navigator and navigator gives directions on which code to type. both are responsible to correct code.

//   Researched answer: the driver works th code and is focuse on data entry. the navigator brainstorms and discuss to review and do the real-time code. Change position every 30 mins as needed.



// ## Looking Ahead: Terms for Next Week

// Research and define the following terms to the best of your ability.

// 1. Higher Order Functions: functions that operate on other function. Recieves the function like a map function then return the output.

// 2. Jest: is a testing framework; a test runner and for creating structuring tests.

// 3. Objects: An object is an unordered collection of key valued pairs.

// 4. Method: A method is an object that contains a function definition.

// 5. Classes: Classes are for creating objects. are built on prototypes, and summarize the data with code to work on the data.
