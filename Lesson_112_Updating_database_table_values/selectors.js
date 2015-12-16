$(document).ready(function(){
	$('#save_button').click(function(){
		var name = $('#name').val();
		
		$('#save_status').text('Loading...');
		
		$.post('settings.php', { name: name }, function(data){
			$('#save_status').text(data);
		});
	});
});