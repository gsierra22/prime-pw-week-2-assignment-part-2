// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We assigned the variable 1 to 'number.' If number is greater or equal to 2 then we console log yes.
// Because the number is smaller than 1, the console log won't output 'yes.'
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We are assigning name the value 'Dane'
// We are telling console log to output 'Hi Mary' if the name variable is Mary
// If the varible isn't Mary then console log will output 'How do you do?'
//Because value of the variable is 'Dane', console log outputs 'How do you do?'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We are assigning 123 to the variable code
// If code equals 123 then secret is equal to super and you multiply code by 2
// If code then is greater than 250 then secret will equal duper
//Because 123 * 2 = 246 console log secret will output super

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/
// if the person is student with a zip code greater than 8000 then console log outs You're a student on the west coast
//if they are not a student and younger than 30 then it outputs, what are your hobbies
//if they are a student console log outputs Welcome to primeacademy
//if they are not a student, console log outputs How about the weather?

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX- colorOne should be blue and colorTwo should be red according to the description
//Since mix is true, then color one and two should be purple
//The code is missing color two. you can add it as colorOne && colorTwo

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

//Currently || will make the statment an 'or' statement. To make it 'and' we replace || with &&
//I think constan time=4 means that time must equal 4 meaning we cannot have any other value for time.
//If this is correct then we replace constan with let so there can be other values
//Because temp and time are higher than the values in their formula, the console log will output 'throw away food.'
/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

//FIX The current code will reject people who are 21
//Using <= in this scenario means the program will check if people are 21 or older
//The console log it is paired with, no entry, means it will reject people who are 21 and older
//To fix it use code like if (age >= minAge){console.log('no entry')} in the first part
//It is important we switch the two console logs since we want people 21 and older allowed entry
//We also want the program to deny entry to people younger than 21. The unfixed program allowed entry
//If we want to allow 21 year olds then we only have to use <
/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
