var $ = require("jquery");

window.onload=function(){
	
	var table = $('td');
	for(var i = 0; i < table.length; i++){
		
		var cellNumber = table[i].id;
		table[i].addEventListener("click", function(j){
			$.get( "api///makeAMove/" + $(this).attr('id'), function( data ) {
				console.log($(this).attr('id'));
			});
		});
	}

// búa til function sem getu hverri cellu takka og hver af þessum tökkum getur kallað á api
// eina sem hver takki þarf að eiga er upplýsingar um hvaða númer er á honum

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



