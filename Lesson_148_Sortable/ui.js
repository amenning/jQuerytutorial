$(document).ready(function(){

	$('#name, #places').sortable({
		containment: 'window',
		tolerance: 'pointer',
		cursor: 'pointer',
		revert: true,
		opacity: 0.6,
		connectWith: '#name, #places',
		update: function(){
			content = $(this).text();
			$('#sort_status').text(content);
		}
	});

});