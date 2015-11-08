$(window).unload(function() {
	//does not work in chrome or firefox
	var c = confirm('Are you sure you want to leave?');
	if(c){
		return true;
	}else{
		return false;
	}
});