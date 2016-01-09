$(document).ready(function(){
	$('#countdown').countdown({date: '9 January 2016 18:35:30'}, function(){
		$('#countdown').text('We\'re live!');
	});
});