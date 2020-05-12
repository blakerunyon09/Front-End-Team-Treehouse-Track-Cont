// Pop up box with text. (Method)

alert("What up B?");

// Pop up box with question. (Method)

prompt("What's up G-Money?");

// Write to the HTML

document.write ("<p>What's up Bobby?</p>");

// Write to the console

console.log ("This is a test message.");

// Write to an element

document.querySelector("body").textContent = "END";

// 1. Updating Variables

var score = 0;
score = 10;

// 2. Updating Variables 

var score = score + 10;

// 3. Updating Variables 

score += 10;

// 3. Updating Variables 

var finalscore = score + 10;

// 1. Variable Options

var message1 = "This"

// 2. Variable Options
/* Once you assign a value, it can not be overwritten. 
For instance, you can not += 5 to a const variable. */

const message2 = "This";

// 3. Variable Options
/* You can override let but you can not override it. 
For instance, += 5 to let will work, but let = "Message" will not. */

let message3 = "This";

//Strings
/* You can use backslash to avoid ", ', and line break issues. */

let = "Message Goes Here"
let = 'Message Goes Here'
let = 'I\'m a single quote helper.'
let = "This is how \
you write multiline \ "

// 1. Find Length
/* You could use this to set up minimum/max password lengths. */

const passphrase = 'Open Sesame';
console.log( passphrase.length );

// 2. Find Length

"Good morning, students!".length;

// Property
/* In this case, "length" is the object of passphrase.
In other words, length is a piece of information about the variable. */

console.log(passphrase.length);

//Upper/Lower Case (Method)

const passphrase = "I have spoken";
console.log ( passphrase.toLowerCase() );
console.log ( passphrase.toUpperCase() );

//Methods
/* In this case, "log" is the method. You are logging
to the console. */

console.log ("Message goes here.");

/*In this case, "toUpperCase" is the method.
You are transforming passphrase to upper case. 
Methods do not change the variable though
if you print the variable again you'll see the original*/


const passphrase = "make this upper case";
alert ( passphrase.toUpperCase() );

// Capture inputs

const password = prompt ( "When is your birthday?");
alert (password);

// 1. String Concatination

const name = prompt ( "What is your name?");
const message = 'Hello: ' + name;
console.log ( message );

// 2. String Concatination

const name = prompt ( "What is your name?");
let message = 'Hello: ' + name;
message += " This is more."
message += " Then even more!"
alert ( message );

// 3. String Concatination with Literals
/* Template Literals us ` ` and drop in 
variables with ${Variable} */

const name = prompt ( "What is your name?");
const message = `Hello: ${name}. It's ${2 * 3}PM. `;
alert ( message );

// Shout program example.
// HTML Writting

const stringToShout = prompt ( "What do you want to shout?" );
const shout = stringToShout.toUpperCase();
const shoutMessage = `This is the message to shout: ${shout}`;

document.querySelector('body').innerHTML = shoutMessage;

//IF ELSE Statements

const answer = prompt ( "What planet is closest to the sun?" )

if ( answer == "Mercury" ) {
	alert ( "You got it" )
} else {
	alert ( "Sorry... NO!")
}

// Operators 

/* 
== Close Match (Capital doesn't matter.)
=== Exact Match (Capital does matter.)
!= Not Equal
!== Strictly Not Equal
> Greater Than
< Less Than
>= Greater Than or Equal
<= Less Than or Equal
*/

/*The following statement is true
because a is before b.*/

'apple' < 'bear'

/* The follwoing are true */

'3' == 3

/* Not Equal 
Devs prefer strict === over equal ==*/

'3' === 3


// Boolean values represent true or false

let correctGuess = false;
const number = 6;
const guess = prompt ( "How many things are there?");

if ( +guess === number ) {
	correctGuess = true;
}

console.log ( correctGuess );

// IF ELSE statememts

if ( weather === 'sun' ) {
	console.log ( 'Go outside.' )
} else if ( weather === 'rain' ) {
	console.log ( 'Stay Inside' )
} else {
	console.log ( 'Who knows.?' )
}

// Defining Variables in Functions
/*
let and const are scoped variable declarations. 
They only work within the scope of the function. 
If you defined let inside the function it will not 
be defined in your console log.
*/

if ( +guess === number ) {
	correctGuess = true;
}

// Compare to this, which will not be defined outside.

if ( +guess === number ) {
	correctGuess = true;
}

// AND Operators 

let x = 11;
if ( 10 < x && x < 15 ) {
	console.log ( 'You got it!' )
}

/* Another option  if any constains and empty string
they will all fall to pass*/

( password === '' || email === '' || username === '' )

// OR Operators

let x = 9
if ( 10 > x || x < 15 ) {
	console.log ( 'You got it!' )
}

agree ( )

// Math Operators 

/*

+=
-=
*=
/=

*/


// Seconds Alive Example

const secondsPerMinute = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 54;

let secondsPerDay = secondsPerMinute * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds per day.`)

const yearsAlive = prompt("How long have you been alive?");

const secondsAlive = secondsPerMinute * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * yearsAlive;

document.querySelector('body').innerHTML = `You've been alive for ${secondsAlive} seconds...`;

// You can retrieve the type of string, number, boolean, etc

console.log ( typeof 42 );
console.log ( typeof "Hey World");

//Converting string defaults to numbers.

const HTMLBadges = prompt ('How many badges do you have?' )
const CSSBadges = prompt ( 'How many of these badges do you have?' )

const totalBadges = HTMLBadges + CSSBadges;
console.log(totalBadges);
/* At this point in the console you'd see 10 + 5 = 105 
so you need to convert the strings to numbers. */

const totalBadges = parseInt ( HTMLBadges ) + parseInt ( CSSBadges );
console.log(totalBadges)

/* To parse a float use parseFloat */

parseFloat ("3.14")

/* There is also a shorthand version 
to strings to integers and float numbers 
Devs use parseInt more often to make code readable*/

const totalBadges = +HTMLBadges + +CSSBadges;
console.log(totalBadges)

// Math Objects

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Math Rounding

Math.round(2.2)
2

Math.round(44.9)
45

// Math.random() returns number from 0 - 1

Math.random();

// You can return a number between 0-6

Math.random() * 6;

// To convert to an Integer round up or down with:

Math.floor(Math.random() * 6);

Math.ceil(Math.random() * 10);

//A die roll could look like this.

Math.ceil(Math.random() * 6)

//RNG Example

const inputHigh = prompt("High number:");

const highNumber = parseInt(inputHigh);

/* If the user does not provide a number, 
parseInt will kick back "NAN" whhich is 
always consider FALSE for IF statements. */

if (highNumber) {
	const randomNumber = Math.floor ( Math.random() * highNumber ) + 1;

	console.log (`${randomNumber} is a number between 1 and ${highNumber}`);
} else {
	console.log('You need to provide a number.')
}

//RNG Range Example

const inputHigh = prompt("High Number:");
const inputLow = prompt("Low Number:")

const highNumber = parseInt(inputHigh);
const lowNumber = parseInt(inputLow);

/* If the user does not provide a number, 
parseInt will kick back "NAN" whhich is 
always consider FALSE for IF statements. */

if (highNumber && lowNumber) {
	const randomNumber = Math.floor ( Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;

	console.log (`${randomNumber} is a number between ${lowNumber} and ${highNumber}`);
} else {
	console.log('You need to provide two number.')
}



















