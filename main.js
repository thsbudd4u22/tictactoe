$(document).ready(
  function(){
      for(var i=0; i<3; i +=1) {
				var $row = $('<tr>', {id: "row"+ i, class: "row"});
				$("#gameboard").append($row);
				for(var b=0; b<3; b +=1) {
					var $square = $('<td>', {id: "square" + i + b, class: "square"});
					$("#row" + i).append($square);
				}
			}
			$(".square").text("-");

			var counter = 1;

		$(".square").click(function(){
			if (counter % 2 !== 0 && ($(this).text()==='-')) {
				counter += 1;
				$(this).text("X");
			} else if ($(this).text()==='-') {
				counter +=1;
				$(this).text("O");
			}
			winCheck()
			console.log('counter', counter)
		});


		function winCheck() {
				if ($("#square00").text()==="X" && $("#square01").text()==="X" && $("#square02").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square00").text()==="O" && $("#square01").text()==="O" && $("#square02").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square10").text()==="O" && $("#square11").text()==="O" && $("#square12").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square10").text()==="X" && $("#square11").text()==="X" && $("#square12").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square20").text()==="O" && $("#square21").text()==="O" && $("#square22").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square20").text()==="X" && $("#square21").text()==="X" && $("#square22").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square00").text()==="O" && $("#square10").text()==="O" && $("#square20").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square00").text()==="X" && $("#square10").text()==="X" && $("#square20").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square01").text()==="O" && $("#square11").text()==="O" && $("#square21").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square01").text()==="X" && $("#square11").text()==="X" && $("#square21").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
			}
				if ($("#square02").text()==="O" && $("#square12").text()==="O" && $("#square22").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square02").text()==="X" && $("#square12").text()==="X" && $("#square22").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
					if ($("#square00").text()==="O" && $("#square11").text()==="O" && $("#square22").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square00").text()==="X" && $("#square11").text()==="X" && $("#square22").text()==="X") {
					alert("Player 1 WINS");
					counter=1
					$(".square").text("-");
					return;
					}
					if ($("#square02").text()==="O" && $("#square11").text()==="O" && $("#square20").text()==="O") {
					alert("Player 2 WINS");
					counter=1
					$(".square").text("-");
					return;
				}
				if ($("#square02").text()==="X" && $("#square11").text()==="X" && $("#square20").text()==="X") {
					alert("Player 1 WINS"); 
					counter=1
					$(".square").text("-");
					return;
				}
				if (counter===10) {
					alert("draw");
				counter=1
					$(".square").text("-");
				}
			}

});




