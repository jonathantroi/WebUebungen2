$(document).ready(function(){
	$("#p_change").click(function(){
		$("#p_change").html("cyka!");
	})


})

var player = 1;

var x = [ //TicTacToeField
	[0,0,0],
	[0,0,0],
	[0,0,0]
];

function checkTicTacToe(){
	 checkHorizontal();
	 checkVertical();
	 checkDiagonal();
}

function checkHorizontal(){
	if(x[0][0] == 1 && x[0][1] == 1 && x[0][2] == 1){
		$("#trumpContainer").show();
	}else if(x[1][0] == 1 && x[1][1] == 1 && x[1][2] == 1){
		$("#trumpContainer").show();
	}else if(x[2][0] == 1 && x[2][1] == 1 && x[2][2] == 1){
		$("#trumpContainer").show();
	}

	if(x[0][0] == 2 && x[0][1] == 2 && x[0][2] == 2){
		$("#KimjongContainer").show();
	}else if(x[1][0] == 2 && x[1][1] == 2 && x[1][2] == 2){
		$("#KimjongContainer").show();
	}else if(x[2][0] == 2 && x[2][1] == 2 && x[2][2] == 2){
		$("#KimjongContainer").show();
	}
}

function checkVertical(){
	if(x[0][0] == 1 && x[1][0] == 1 && x[2][0] == 1){
		$("#trumpContainer").show();
	}else if(x[0][1] == 1 && x[1][1] == 1 && x[2][1] == 1){
		$("#trumpContainer").show();
	}else if(x[0][2] == 1 && x[1][2] == 1 && x[2][2] == 1){
		$("#trumpContainer").show();
	}

	if(x[0][0] == 2 && x[1][0] == 2 && x[2][0] == 2){
		$("#KimjongContainer").show();
	}else if(x[0][1] == 2 && x[1][1] == 2 && x[2][1] == 2){
		$("#KimjongContainer").show();
	}else if(x[0][2] == 2 && x[1][2] == 2 && x[2][2] == 2){
		$("#KimjongContainer").show();
	}
}

function checkDiagonal(){
	if(x[0][0] == 1 && x[1][1] == 1 && x[2][2] == 1){
		$("#trumpContainer").show();
	}else if(x[2][0] == 1 && x[1][1] == 1 && x[0][2] == 1){
		$("#trumpContainer").show();
	}

	if(x[0][0] == 2 && x[1][1] == 2 && x[2][2] == 2){
		$("#KimjongContainer").show();
	}else if(x[2][0] == 2 && x[1][1] == 2 && x[0][2] == 2){
		$("#KimjongContainer").show();
	}
}

$(document).ready(function(){
	$("#tt11").click(function(){
		if(player == 1 && x[0][0] != 2){
			$("#tt11").css("background-color", "blue");
			x[0][0] = player;
			player = 2;	
		}else if(player == 2 && x[0][0] != 1){
			$("#tt11").css("background-color", "red");
			x[0][0] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt12").click(function(){
		if(player == 1 && x[0][1] != 2){
			$("#tt12").css("background-color", "blue");
			x[0][1] = player;
			player = 2;	
		}else if(player == 2 && x[0][1] != 1){
			$("#tt12").css("background-color", "red");
			x[0][1] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt13").click(function(){
		if(player == 1 && x[0][2] != 2){
			$("#tt13").css("background-color", "blue");
			x[0][2] = player;
			player = 2;	
		}else if(player == 2 && x[0][2] != 1){
			$("#tt13").css("background-color", "red");
			x[0][2] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt21").click(function(){
		if(player == 1 && x[1][0] != 2){
			$("#tt21").css("background-color", "blue");
			x[1][0] = player;
			player = 2;	
		}else if(player == 2 && x[1][0] != 1){
			$("#tt21").css("background-color", "red");
			x[1][0] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt22").click(function(){
		if(player == 1 && x[1][1] != 2){
			$("#tt22").css("background-color", "blue");
			x[1][1] = player;
			player = 2;	
		}else if(player == 2 && x[1][1] != 1){
			$("#tt22").css("background-color", "red");
			x[1][1] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt23").click(function(){
		if(player == 1 && x[1][2] != 2){
			$("#tt23").css("background-color", "blue");
			x[1][2] = player;
			player = 2;	
		}else if(player == 2 && x[1][2] != 1){
			$("#tt23").css("background-color", "red");
			x[1][2] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt31").click(function(){
		if(player == 1 && x[2][0] != 2){
			$("#tt31").css("background-color", "blue");
			x[2][0] = player;
			player = 2;	
		}else if(player == 2 && x[2][0] != 1){
			$("#tt31").css("background-color", "red");
			x[2][0] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt32").click(function(){
		if(player == 1 && x[2][1] != 2){
			$("#tt32").css("background-color", "blue");
			x[2][1] = player;
			player = 2;	
		}else if(player == 2 && x[2][1] != 1){
			$("#tt32").css("background-color", "red");
			x[2][1] = player;
			player = 1;
		}
		checkTicTacToe();
	})

	$("#tt33").click(function(){
		if(player == 1 && x[2][2] != 2){
			$("#tt33").css("background-color", "blue");
			x[2][2] = player;
			player = 2;	
		}else if(player == 2 && x[2][2] != 1){
			$("#tt33").css("background-color", "red");
			x[2][2] = player;
			player = 1;
		}
		checkTicTacToe();
	})
})



