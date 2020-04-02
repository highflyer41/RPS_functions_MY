let hands = ["rock", "paper", "scissors"];

function getHand() {
	return hands[parseInt(Math.random()*3)];
}

// class Player {
// 	constructor(name) {
// 		this.name = name;
// 		this.hand = getHand();
// 	}	
// };

// let player1 = new Player("player1");
// let player2 = new Player("player2");

// let compHand = getHand();
// let userHand = prompt("Enter: rock, paper, or scissors");

let hand1 = null;
let hand2 = null;
let score = 0;
let p1Wins = 0;
let p2Wins = 0;

var h1 = document.createElement("h1");
h1.setAttribute('style', 'white-space: pre;');
h1.textContent = "Game Start: ";

function playRound(p1, p2) {
	hand1 = p1;
	hand2 = p2;
	h1.textContent += "\r\nYou chose " + hand1;
	h1.textContent += "\r\nComp chose " + hand2;

	if(hand1 == hand2) {
		h1.textContent += "\r\nIt's a tie";
		return null;
	}else if(hand1 == "paper") {
		if(hand2 == "scissors") {
			h1.textContent += "\r\nplayer 2 won";
			return hand2;
		}
		else {
			h1.textContent += "\r\nPlayer 1 won";
			return hand1;
		}
	}else if(hand1 == "rock") {
		if(hand2 == "paper") {
			h1.textContent += "\r\nplayer 2 won";
			return hand2;
		}
		else {
			h1.textContent += "\r\nPlayer 1 won";
			return hand1;
		}
	}else if(hand1 == "scissors") {
		if(hand2 == "rock") {
			h1.textContent += "\r\nplayer 2 won";
			return hand2;
		}
		else {
			h1.textContent += "\r\nPlayer 1 won";
			return hand1;
		}
	}
}


function playGame() {
	while(score == 0){
		score = prompt("What score do you want to play til: ");
	}

	let compHand = getHand();
	let userHand = prompt("Enter: rock, paper, or scissors").toLowerCase();

	let result = playRound(userHand, compHand);

	if(result == null) {
		h1.textContent += "\r\nTie round";
		h1.textContent += "\r\nUser: " + p1Wins + "\r\nComp: " + p2Wins;
	}else if(result == hand1) {
			p1Wins++;
			h1.textContent += "\r\nUser: " + p1Wins + "\r\nComp: " + p2Wins;
		if(p1Wins == score) {
			h1.textContent += "\r\nPlayer 1 won the game";
		}
	}else if(result == hand2) {
			p2Wins++;
			h1.textContent += "\r\nUser: " + p1Wins + "\r\nComp: " + p2Wins;
			if(p2Wins == score) {
				h1.textContent += "\r\nPlayer 2 won the game";
		}
	}
}

document.body.appendChild(h1);

document.querySelector('#newRound').addEventListener('click', goAgain);
function goAgain(){
	playGame();
}