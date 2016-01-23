$(document).ready(function(){
	$('#drag').draggable({
		containment: 'document',
		revert: true
	});
	
	$('#drop').droppable({
		drop: function(){
			alert('Dropped');
		},
		hoverClass: 'border',
		tolerance: 'pointer' // intersect (default), fit, or touch
		
	});
});