
let doors;
let playerChoice;
let hostChoice;
let ghostChoice;

function initializeGame( ) {
	/*///-preparation
	//prepare the 3 doors
	//assign lions to the rest of the doors */
	doors = [ 'lion' , 'lion' , 'lion' ];

	//determine what option has a car behind in a random way
	let doorWithCar = Math.floor( Math.random( ) * 3 );

	doors[ doorWithCar ] = 'Car';
}

//-game

function playGame( ) {
	//display 3 options or prompt user
	// user enters a number between 1 and 3 for their door pick
	//way to indicate the original choice and randomize when simulation is done
	//let playerChoice = Number.parseInt( process.argv[ 2 ] );

	playerChoice = Math.floor( Math.random( ) * 3 ) + 1;
	hostChoice = 1;

	// host opens one of the doors that is not the car different from player's choice
	// host checks if door 1 is available
	if ( playerChoice !== 1 && doors[ 0 ] !== 'Car' ) {
		hostChoice = 1;
	}
	// host checks if door 2 is available
	else if ( playerChoice !== 2 && doors[ 1 ] !== 'Car' ) {
		hostChoice = 2;
	}
	// host determines door 3 is available
	else {
		hostChoice = 3;
	}
	ghostChoice = 1;
	//have a ghost player that takes the remaining door
	if ( playerChoice !== 1 && hostChoice != 1 ) {
		ghostChoice = 1;
	}
	else if ( playerChoice !== 2 && hostChoice != 2 ) {
		ghostChoice = 2;
	}
	else {
		ghostChoice = 3;
	}
}

let playerWins = 0;
let ghostWins = 0;

function displayResults( ) {
	//open all doors and display results

	console.log( 'Doors :' , doors );
	console.log( 'Player choice ' , playerChoice );
	console.log( 'Host opened ' , hostChoice );
	console.log( 'Ghost choice ' , ghostChoice );
	if ( doors[ playerChoice - 1 ] === 'Car') {
		playerWins++;
	}
	else {
		ghostWins++;
	}

}

//display number of times each player won as a ratio to # games
function showWins( ) {
	console.log( 'Player won ' , playerWins , ' times' );
	console.log( 'Ghost won ' , ghostWins , ' times' );	
}

//simulate game 10,000 times

for ( let i = 0 ; i < 10000 ; i ++ ) {
	initializeGame( );
	playGame( );
	displayResults( );
}
showWins( );




