$(document).ready(function(){
	$('.duplicate').click(function(){
		alert('You have clicked.');
		$(this).after('<input class="duplicate" type="button" value="Click" />')
	});
});