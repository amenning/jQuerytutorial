$(document).ready(function(){
	$('#a_button').click(function(){
		$('#a_div').hide('slow','linear', function(){
			alert('Element hidden');
		});
	});
});