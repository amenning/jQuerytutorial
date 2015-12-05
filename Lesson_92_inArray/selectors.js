$(document).ready(function(){
	var names = ['Alex','Billy','Dale'];
	
	$('#check').click(function(){
		var name = $('#name').val();
		if(jQuery.inArray(name, names) != '-1'){
			alert(name + ' is in the array!');
		}else{
			alert(name + ' is not in the array!');
		}
	});
	
});