$(document).ready(function(){
	$('input[type="text"]').focus(function(){
		this_val = $(this);
		minlength = this_val.attr('minlength');
		
		alert(minlength);
	});
});