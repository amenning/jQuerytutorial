$(document).ready(function(){
	$('#button').click(function(){
		$.ajax({
			url: "page1.html",
			statusCode: {
				404: function(){
					$('#content').text('Page not found');
				},
				000: function(){
					$('#content').text('000');
				}
			},
			success: function(data){
				$('#content').html(data);
			}
		});		
	});
});