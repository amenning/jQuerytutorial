$(document).ready(function(){
	$('#drag').draggable({
		//axis: 'x' // constrain movement only to x-axis
		containment: 'document'
	});
});