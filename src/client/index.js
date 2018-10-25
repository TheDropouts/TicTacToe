var $ = require("jquery");

window.onload=function(){
	
	var table = $('td');
	for(var i = 0; i < table.length; i++){
		
		var cellNumber = table[i].id;
		table[i].addEventListener("click", function(j){
			$.get( "api/makeAMove/" + $(this).attr('id'), function( data ) {
				ChangeTableVal(data);
			});
			$.get( "api//victoryCheck", function( data ) {
				if(data === true){
					alert("You win game now");
				}				
			});

		});
	}

	$("#reset").click(function(){
		$.get( "api/reset", function() {
			$.get( "api//gamestate", function( data ) {
				ChangeTableVal(data);
			});
		});
	});
	$.get( "api//gamestate", function( data ) {

		ChangeTableVal(data);
	});
	
	function ChangeTableVal( data ){
		for(var i = 0; i < table.length; i++){
			table[i].innerText = data[i];
			
		}
	};
// búa til function sem looðar o geggnum allar cellurnar og uppfærir hvað á a vera í þeim
// og kalla á þetta fall i hvert sinn sem ég kallá á eikka api kall

}



