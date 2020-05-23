let score = 0;
let playerRank;
const body = document.querySelector('body');

let question1 = prompt ( "Yes or NO?");

if (question1.toUpperCase() === "YES") {
	score += 1;
}

let question2 = prompt ( "No or Yes??");

if (question2.toUpperCase() === "YES") {
	score += 1;
}

let question3 = prompt ( "Yesh or Neesh?");

if (question3.toUpperCase() === "YES") {
	score += 1;
}

let question4 = prompt ( "Maybe.");

if (question4.toUpperCase() === "YES") {
	score += 1;
}

let question5 = prompt ( "Ok, it's Yes.");

if (question5.toUpperCase() === "YES") {
	score += 1;
}



if ( score === 5 ) {
	playerRank = "Gold Crown";
} else if ( score === 3 || score === 4 ) {
	playerRank = "Silver Crown";
} else if ( score >= 2 ) {
	playerRank = "Bronze Crown";
} else {
	playerRank = "No Crown";
}

body.innerHTML = `You got ${score} answers correct. That gives you the ${playerRank}!`;