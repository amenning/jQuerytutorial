function change_size(element, size){
	var current = element.css();
}

$('#smaller').click(function(){
	change_size($('p'), 'smaller');
});

$('#bigger').click(function(){
	change_size($('p'), 'bigger');
});