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