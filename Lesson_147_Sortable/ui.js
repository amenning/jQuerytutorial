$(document).ready(function(){

	$('#name').sortable({
		containment: 'parent',
		tolerance: 'pointer',
		cursor: 'pointer',
		revert: true,
		opacity: 0.6
	});

});