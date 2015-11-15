$(document).ready(function(){
	$('#combine').click(function(){
		
		var combined_text = '';
		
		$('input[type="text"]').each(function(index){
			alert(index);
			$(this).val();
		});
		
	});
});