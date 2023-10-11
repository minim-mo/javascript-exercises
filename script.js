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
function capitalize(string) {
    let splitString = str.toUpperCase().split("");
    for (let i=0; i < splitString.length; i++) {
        if (splitString.length[i] < splitString.length) {
            splitString[i].charAt(0).toLowerCase();
        }
        str = splitString.join(" ");

    }
    return str;
}


// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(string) {
    let splitString = str.toLowerCase().split("");

    for (let i = 0; i < splitString.length; i++) {
        if (splitString.length[i] < splitString.length) {
            splitString[i].charAt(0).toLowerCase();
        }
        str = splitString.join(" ");
    }
    return str;
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