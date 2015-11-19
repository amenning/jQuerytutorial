$(document).ready(function(){
	$('#start').click(function(){
		$('#image').slideToggle(5000);
	});
	
	$('#stop').click(function(){
		$('#image').stop(false,false);
	});
});