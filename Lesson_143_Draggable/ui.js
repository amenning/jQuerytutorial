$(document).ready(function(){
	$('#drag').draggable({
		//axis: 'x' // constrain movement only to x-axis
		containment: 'parent' //'window' or 'document'
	});
	
	var x1 = 50;
	var y1 = 210;
	var	x2 = 200;
	var	y2 = 400;
	
	$('#drag2').draggable({
		containment: [x1, y1, x2, y2]
	});
	
	$('#drag3').draggable({
		cursor: 'crosshair', //or 'pointer' 
		opacity: 0.60,
		//grid: [20, 20],
		revert: true, //return to original position after unclicking
		//revertDuration: 5000, //in milliseconds
		start: function(){
			$('#event').text('Dragging started');
		},
		drag: function(){
			$('#event').text('Dragging');
		},
		stop: function(){
			$('#event').text('Dragging stopped');
		}
	});
});