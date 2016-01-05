$(document).ready(function(){
	$('#countdown').countdown({date: '10 August 2011 10:44'}, function(){
		$('#countdown').text.('We\'re live!');
	});
});