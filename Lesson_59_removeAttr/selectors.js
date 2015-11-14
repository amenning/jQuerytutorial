$(document).ready(function(){
	$('#agree').change(function(){
		state = $(this).is(':checked');
		if(state){
			$('#continue').removeAttr('disabled');
		}else if(state==false){
			$('#continue').attr('disabled','disabled');
		}	
	});
});