
game();


function game(){
	var gamestyle = prompt('Choose who you wanna play against \n Another Player - 1 \nComputer - 2 \n A Game to 3 against the Player 2\n To quit press 0');
	if (gamestyle == 1){
		player2();
	}
	else if (gamestyle == 2){
		player1();
	}
	else if(gamestyle == 0){
		
	}
	else if(gamestyle == 3){
		player3();
	}
	else{
		alert('You wrote in the WRONG character please try again');
		game();
	}
}




function input() {
	var item = prompt("Choose:\n Rock - 1 \n Paper - 2 \n Scissors - 3");
	return item;
	
}

function rematch(status){
	var replay = prompt('You ' + status + ', lets play again \nIf you dont want to press 0 to escape!\n Otherwise press enter to continue');
	if(replay == 0){
	}
	else{
		game();
	}
}

function draw(){
	alert("We Drew");
	rematch("drew");
}

function win(){
	alert("You Win, I suck");
	rematch("Won");
}

function lose(){
	alert("You Lose Booooo");
	rematch("lost");
}

function player1(){

	var i = input();
	var com = (Math.floor(Math.random()*3)+1);
	
	if(com == 1){
		alert("I chose Rock");
	}
	else if( com == 2){
		alert("I chose Paper");
	}
	else{
		alert('I chose Scissors');
	}

	if(i == com){
		draw();
	}
	else if((i>com && (i-com) == 1 )|| (com-i == 2)){
		win();
	}
	else
	{
		lose();
	}
}


function player2(){
	var i = input();
	alert("Player 1 has chosen \nNow Player 2 enter");
	var com = input();
	alert("Player 2 has chosen");

	if(i == com){
		alert('You both drew')
		game();
	}
	else if((i>com && (i-com) == 1 )|| (com-i == 2)){
		alert('Player 1 Won!\nPlayer 1 chose number ' + i + "\n Rock - 1 \n Paper - 2 \n Scissors - 3")
		game();

	}
	else if(i == 0 || com == 0){

	}
	else
	{
		alert('Player 2 Won!\nPlayer 2 chose number ' + i + "\n Rock - 1 \n Paper - 2 \n Scissors - 3")
		game();
	}
}

function player3(){
	var score1 = 0;
	var score2 = 0;
	game3();
	function game3(){
		var i = input();
		alert("Player 1 has chosen \nNow Player 2 enter");
		var com = input();

		alert("Player 2 has chosen");

		if(i == com){
			alert('You both drew' + 'The Score is: ' + score1 + " : " + score2 + "\n Rock - 1 \n Paper - 2 \n Scissors - 3")
			game3();
		}
		else if((i>com && (i-com) == 1 )|| (com-i == 2)){
			score1++;
			alert('Player 1 Won!\nPlayer 1 chose number ' + i + '. The Score is: ' + score1 + " : " + score2 + "\n Rock - 1 \n Paper - 2 \n Scissors - 3");
			if(score1>=3){
				alert('Player 1 won!!!');
				game()
			}
			else{
				game3();
			}

		}
		else if(i == 0 || com == 0){

		}
		else
		{
			score2++;
			alert('Player 2 Won!\nPlayer 2 chose number ' + i + '. The Score is: ' + score1 + " : " + score2 + "\n Rock - 1 \n Paper - 2 \n Scissors - 3");
			if(score1>=3){
				alert('Player 2 won!!!')
				game();
			}
			else{
				game3();
			}
		}
	}
}

















