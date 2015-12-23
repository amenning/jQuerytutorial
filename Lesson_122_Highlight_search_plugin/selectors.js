$(document).ready(function(){
	$('#search_button').click(function(){
		var search_term = $('#search_term').val();
		$('body').removeHighlight().highlight(search_term);
	});
});
