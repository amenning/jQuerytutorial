$(document).ready(function(){
	$('.name, .place').draggable({
		containment: 'document',
		revert: true
	});
	
	$('#drop').droppable({
		hoverClass: 'border',
		tolerance: 'pointer', // intersect (default), fit, or touch
		accept: '.name',
		over: function(){
			$('#drop').text('Something has hovered over me');
		},
		out: function(){
			$('#drop').text('Something has been dragged out');
		},
		drop: function(){
			$('#drop').text('Something dropped');
		}
	});
});