$(document).ready(function(){
	$("#p_change").click(function(){
		$("#p_change").html("cyka!");
	})

	$("#animSquareW").click(function(){
		$("#square").width("10%");
		$("#square").show();
		$("#square").animate({width:"100%"}, 5000);
	})

	$("#animSquareH").click(function(){
		$("#square").height("100px");
		$("#square").show();
		$("#square").animate({height:"300px"}, 5000);
	})

	$("#stopAnimation").click(function(){
		$("#square").stop();
	})

	$("#canvasAnimation").click(function(){
		startAnimation();
	})

	$("#loadProgress").click(function(){
		var elem = $("#progressBar");
		var bWidth = 1;
		var perCounter = 1;
		var id = setInterval(load, 5);

		var progress = 1;
	});
});

	function startAnimation(){
		var canvas = document.getElementById("canvasArea");
		var ctx = canvas.getContext("2d");

		ctx.moveTo(10,10);
		ctx.lineTo(190,10);
		ctx.lineTo(190,190);
		ctx.lineTo(10,190);
		ctx.lineTo(10,10);

		ctx.fillStyle="lightblue";
		ctx.fillRect(10,10,180,180);

		ctx.stroke();
	}

	function load(){
			if(bWidth >= 1000){
				clearInterval(id);
			}else{
				bWidth++; //(($("#progressBar").width()) / 100 * perCounter);
				elem.width(bWidth);
			}

			// $("#progress").html((elem.width()) / 100 * progress) + "%");
			// progress++;

			if(bWidth % 10 == 0 && progress <= 100){
				$("#progress").html(progress + "%");
				progress++;
			}
	}


$(document).ready(function(){

	var typingTimer;
	var doneTypingInterval = 10;
	var $input = $("#searchField");

	$("#searchField").on('keyup', function(){
		clearTimeout(typingTimer);
		typingTimer = setTimeout(doneTyping, doneTypingInterval);
	})

	$("#searchField").on('keydown', function(){
		clearTimeout(typingTimer);
	})


	


});

//Make :contains case unsensitive
jQuery.expr[':'].contains = function(a, i, m){
	return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
}

function doneTyping(){
	var sItem = $("#searchField").val();

	$(".personContent").children().hide();
	$(".personContent:contains("+sItem+")").children().show();
}




function addPerson(){
		$("#perTable tr:last").after(
			"<tr class='personContent'>"+
				"<td>"+ $('#nameinput').val() +"</td>"+
				"<td>"+ $('#nachnameinput').val() +"</td>"+
				"<td>"+ $('#gebinput').val() +"</td>"+
				"<td>"+ $('#emailinput').val() +"</td>"+
				"<td id='colorField'>"+$('#colorinput').val()+"</td>"+
			"</tr>");

		$('#colorField').css('background-color', $('#colorinput').val());
	}
