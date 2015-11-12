$(document).ready(function(){
	$('body').on('click','.duplicate', function(){
			alert('You have clicked.');
			$(this).after('<input class="duplicate" type="button" value="Click" />')
	});
});