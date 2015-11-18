$('#inout').click(function(){
	$('#image').fadeToggle(5000, 'swing', function(){
		alert('Animation complete');
	});
});