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

	$("#loadProgress").click(function(){
		var elem = $("#progressBar");
		var bWidth = 1;
		var id = setInterval(load, 5);
	
		var progress = 1;

		function load(){
			if(bWidth >= 1000){
				clearInterval(id);
			}else{
				bWidth++;
				elem.width(bWidth);
			}

			if(bWidth % 10 == 0 && progress <= 100){
				$("#progress").html(progress + "%");
				progress++;
			}
		}
	})



	
})

