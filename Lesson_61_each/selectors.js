$(document).ready(function(){
	$('#combine').click(function(){
	
		var combined_text = '';
		var failed = false;
		
		$('input[type="text"]').each(function(){
			if($(this).val()==''){
				failed=true;
			}
		});
		
		if(failed == true){
			alert('Fill out all fields');
		}else if(failed == false){		
			$('input[type="text"]').each(function(index){
				combined_text += $(this).val() + ' ';
			});
		
			$('#combined').text(combined_text);
		}
	});
});