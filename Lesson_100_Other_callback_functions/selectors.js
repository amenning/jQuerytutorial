$('#button').click(function(){
	var name = $('#name').val();
	var string = $('#string').val();
	
	$.post('reverse.php',{string: string, name: name},function(data){
		$('#feedback').html(data);
	}).error(function(){
		$('#feedback').append('An error occurred');
	}).complete(function(){
		$('#messages').append('Request complete <br/>');
	}).success(function(){
		$('#messages').append('Request successful <br/>');
	});
	
});