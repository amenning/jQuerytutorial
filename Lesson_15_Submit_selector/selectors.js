$(':button').click(function(){
	alert ('Hello');
});
$(':submit').click(function(){
	$(this).attr('value', 'Please wait...');
});