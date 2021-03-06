
/* 
_This is a comment. Follow the other lines that look like me to complete the assignment. Start your LiveServer to see your changes as you save them.
_"document" is the interface we have on the screen, also known as the DOM.
_.write is a built in method(or function) we can use to print things out on the document/screen. */

document.write("this is the first line in the script I came across. Change me now.")
document.write("<hr/>") // Don't worry about this line. 

/*  Add
_1. Declare, name and assign two variables Number type values on line 1 and 20
_2. Pass the names into the method below like so: document.write(myNum + myNumTwo)on line 22. Be sure to add in the " + " in-between the two variables. 
_3. Save and checkout your browser.
*/
var item = 3
var itemTwo = 8




document.write(item+itemTwo)
document.write("<hr/>") // Don't worry about this line. 

/*  Subtract
_1. Now pass those same variables into the ".write()" method on line 30 but with a " - " in-between them. 
_2. Save and checkout your browser. 
*/
var item = 3
var itemTwo = 8

document.write(item-itemTwo)
document.write("<hr/>") // Don't worry about this line. 

/*  Multiply
_1. Create another Number type variable with a different value on line 40
_2. Do you see the function multiplyTwoNumbers on line 42? It takes in two factors a & b and returns their product.
_3. Do you see the document.write(()) on line 46? Un-comment it by removing the // before it.
_4. In that same line, pass your new variable's name and one of your first variable's names in the middle of the (()).
_5. Save and checkout your browser. 
*/
var car = 2
var car2 = 5

function multiplyTwoNumbers(a, b) {
return a * b
}

document.write(multiplyTwoNumbers(car,car2))
document.write("<hr/>") // Don't worry about this line. 

/*  Divide
_1. Below you will see another document.write() on line 57?
_2. Type in multipleTwoNumbers(a, b) but replace "a" and "b" with your first two variables you created on lines 19 & 20
_3. Then type in " / ".
_4. Then type in the name of your last made variable on line 40.
_5. Save and checkout your browser. 
*/

document.write(multiplyTwoNumbers(item, itemTwo/car2))
document.write("<hr/>") // Don't worry about this line. 

/*Compare
_1. Use the Comparison Operators: <, >, ==, === !=, !===
_2. Create a few more variables of either Number or String type
_3 Make a few comparisons inside the () of document.write on line 68.
_4. Save and checkout your browser. Play some more!!
*/

var name = 10
var numbers = 3
var name1 = 5

document.write(name === name1)
document.write("<hr/>") // Don't worry about this line. 

/*Concat Strings "Hello" + "Snoopy" => "Hello Snoopy"
_1. Create a few new String type variables below
_2. Type the names in to the () of the document.write method below on line 80 separating each name with a " + ".
*/
var firstName = "ericka"
var lastName = "herod"
var greeting = "Hello"

function greetUser  (greeting, firstName, lastName) {
  return greeting + " " + firstName + " " + lastName
}




document.write(greeting + " " + firstName + " " + lastName)
document.write("<hr/>") // Don't worry about this line. 

// examples of variables.
var myVarOne = "I";
var myVarTwo = "Gangs of New York";
var myVarThree = "love";

document.write("<hr/>")
document.write(myVarOne + " " + myVarThree + " " + myVarTwo)