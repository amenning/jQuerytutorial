$(document).ready(function(){
	$('#email').focusin(function(){
		if($('#email').val()===''){
			$('#email_feedback').text('Go on, enter a valid email address...');
		}
	}).blur(function(){
		$('#email_feedback').text('');
	});
});