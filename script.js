//Fundamentals Part 1
// Declare a variables
//naming the variables
//Operators/ Operands/ Operations
//Concatenate String and Number
//== and ===
//increment/decrement -/+
//prefixing and postfixing
//assignment operators
//Unary plus operator


// console.log() is the command to print something to the developer console in your browser. You can use this to print the results from any of the following articles
//  and exercises to the console. We encourage you to code along with all of the examples in this and future lessons.

//Variables unit
//1. let
//2. Var
//3. const

//Numbers
//Operators precedence values
// () grouping (100+50)*3
// () can also mean function
// . member of for example person.name (means in the object person is member of name...)
// new means new arguments new Date(), new Name()


//Increment Operators
// ++ for example i++; postfix increment
//-- for ex: i--; postfix decrement
//++i prefix increment
//--i prefix decrement

// NOT OPERATORS
// ! Logical NOT !(x==y);
// ~ Bitwise NOT ~x;

//Unary Operators
// + unary plus +x;
//unary minus -x;
//typeof for Data type
//void for evaluate void
//delete for property delete

//Arithmetic Operators
// ** exponentiation ES2016
// * multiplication
// / division
// % division remainder
// + addition
// - subtraction
// + concatenation use to concatenate objection together "Hi"+"John"

// Shift Operators
// << shift left
// >> shift right
// >>> shift right unsigned 

//Relational Operators
// in for property in object for example "PI" in Math
// instanceof for Instance of object example x instanceof Array


/************
 *** Comparison Operators
 < less than
 <= less than or equal to
 > grater than 
 >= grater than or equal to
 == equal
 === Strict Equal
 != unequal
 !== strict unequal
**************** */

/* Bitwise Operators
& bitwise AND
^ Bitwise XOR
| bitwise OR 
*/

/* Logical Operators
&& Logical AND
|| Logical OR
?? Logical Nullish coalescing es2020  x??y
*/


/* Conditional(Ternary) Operators

?: means COndition  for example ? "yes" : "no"

*/

/* Assignment Operators will be executed AFTER other operations
= simple assignment
: colon assignment 
+= addition assignment
-= subtraction assignment
*= multiplication assignment
**= exponentiation assignment
/= division assignment
%= remainder assignment
<<= left shift assignment
>>= right shift assignment
>>>= unsigned right shift
&= bitwise AND assignment
|= bitwise OR assignment
^= bitwise XOR assignment
&&= Logical AND assignment
||= Logical OR assignment

=> Arrow
yield Pause/Resume
yield* delegate
... spread
, comma  

*/



//ex:
// let message;
// message = "Hello!"
// console.log(message); //print string as "Hello!"
// alert(message); // show the variable content.

//declare multiple variables
// let user = "John", age = 25, message = "Hello";
// console.log(user, age, message);

// Assignments

//1.
// add 2 number together
// console.log(23+97);
//120

//2.
//add a sequence of 6 different numbers together.
// console.log(2+4+6+8+10+12);
//3.
// Print the solution equation(4+6+9)/77
// console.log((4+6+9)/77);
//answer should print 0.24675

//4.
// //use variables
// let a = 10;
// console.log(a) // print 10
// console.log(9 * a); // print 90
// let b = 7 * a; // print undefined
// console.log(b);


//5.
// const max = 57;
// let actual = max - 13;
// percentage = actual / max;
// console.log(percentage); // should print 0.7719;

//Data Type
// const single = 'Single quotes';
// const double = "Double quotes";
// const backtick = `Backtick`;

// console.log(single);
// console.log(double);
// console.log(backtick);

//replace, slice()
//comparisons >= <= 

//exercise 1
/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

// function troubleshooting() {
// 	const a = 1;
// 	const b = 1;

// 	let result;

// 	// Edit between these lines
// 	// =================================
// 	result = "a" + "b";
    
// 	// =================================

// 	return result;
// }

// Do not change this 
// module.exports = troubleshooting;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/** Fundamental Part 3** */

// Functions
// is the reusable blocks of code!
// for loop, while or do...while loop, if--else statement

//built-in browser functions
//for example
// replace();
// const myText = "I am a string";
// const newString = myText.replace("string", "bagel");
// console.log(newString);
//print "I am a bagel" in console

//.join();
// const myArray = ["I", " love", " chocolate", " cakes"];
// const madeAString = myArray.join("");
// console.log(madeAString);
// //print I love chocolate cakes in console


//.random();
// const myNumber = Math.random();
// console.log(myNumber);
//random function generate a random number between 0 and up but NOT including 1, and returns that number.


/* Function declaration */
// function myFunction() {
//     alert("Hello~");
// }

// myFunction();
//calls the function once to executed
// content alert "Hello~"

/* Function return values */
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal('Dog'))
//Dog is my favorite animal!

// Let’s write some functions! Write these in the script tag of a skeleton HTML file. If you’ve forgotten how to set it up, review the instructions from Fundamentals Part 1.

// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}
console.log(add7(7));
//console should print (7)+7 = 14

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    return num1 + num2;
}
console.log(multiply(1,2));
//console should print 1+2 = 3

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. 
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

//Pseudocode goes here!
// 1. need function capitalize(text) <<< string = text
// 2. finding the first letter in that text. so let text = "Hello!"
//charAt() method will return the specified index(position) in this case we need the first letter so It'd be index[0].
// to return the first letter >>> let letter = text.charAt(0)

function capitalize(text) {
    let letter = text.charAt(0);
    return letter;
}
console.log(capitalize("Hello"));

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

//Pseudocode goes here!
// 1. write function lastLetter(string);
// 2. to find the very last letter of string

function lastLetter(string) {
    let result = string.charAt(string.length-1);
    return result;
}
console.log(lastLetter("abcd"));
//correct answer will print "d"



/*88888888888888888888   Fundamental Part 2    8888888888888888888888888888*/
// Overview
//Name 8 data type in JavaScript
//understand the difference between single and double and backtick quotes
//embed a variable/expression in a string

/* Problem Solving 
 - explain 3steps problem solving process.
 - explain what pseudocode.
 - break problem down into subproblem.
*/

//Understand the problems
// Plan
//Pseudocode

//parseInt function
//should return user's input.

/* Fundamental Part 4 
- Using Arrays
- Using built-in array method
- using loops
-getting TDD exercise.

*/

/* Arrays = special variable, which could hold more than one value:
const cars = ["Jeep", "Toyota", "Cooper"]

arrays is storing the variables in the list of list items.
accessing the array with index

looping array elements
using for loop

*/

//for loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("print-here").innerHTML = fruits;

function addFruits() {
    fruits.push("Watermelon");
    
    document.getElementById("print-here").innerHTML = fruits;
}
addFruits();
console.log(fruits);



// let fruitsL = fruits.length;
// let text = "<ul>";
// for ( let i = 0; i < fruitsL; i++) {
//     text += "<li>" + fruits[i] + "</li>";

// }
// text += "</ul>";


// document.getElementById("print-here").innerHTML = text;

// console.log(text);

//

//Logical Operators
// || OR
// && AND


/*
Check the login
importance: 3
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, 
if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/

//Pseudocode
// first check if is "Admin"
// secondly check if the password is correct
//So...
// if (user === "Admin") {
//    prompt{"Enter your password"} }
// if (password === "TheMaster") { alert{"Welcome!"} } 
// }
// if (user === !"Admin") {prompt{"I don't know you!"}};
// , if (user === "" || user === "other") { alert("Canceled!") }
// else if (password === !"TheMaster") { prompt{"Wrong password"}}
// else (password === "cancel") { alert("Canceled!") }


function Login() {
    // let text = ""; //set default string
    let userName = prompt("Enter you user name"); 

    if (userName === "Admin") {
        let enterPassword = prompt("Enter your password");
        if (enterPassword === "TheMaster") {
            alert("Welcome!");
        }
        else if (enterPassword !== "Admin" && null) {
            alert("Canceled");
        }
        else {
            alert("Wrong password!!");
        }
    } if (userName !== "Admin" || null) {
      alert ("try again!");
    } else {
      alert("I don't know you!");
    }
}

Login();


////calculate function

