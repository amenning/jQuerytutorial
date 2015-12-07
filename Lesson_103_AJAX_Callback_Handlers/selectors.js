$(document).ready(function(){
	$('#button').click(function(){
		var name = $('#name').val();
		
		$.ajax({
			url: 'page.php',
			data: 'name='+name,
			success: function(data){
				$('#content').html(data);
			}
		}).error(function(){
			alert('An error occurred');
		}).success(function(){
			//alert
		}).complete(function(){
			//alert
		});
		
	});
});