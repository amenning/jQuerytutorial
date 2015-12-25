(function($){
	$.fn.countdown = function (options, callback){
		var settings = {
			'from': 60
			};
			
		if(options){
			$.extend(settings, options);
		}
	}
})(jQuery);