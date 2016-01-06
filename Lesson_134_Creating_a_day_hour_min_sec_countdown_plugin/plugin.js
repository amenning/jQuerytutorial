(function($){
	$.fn.countdown = function (options){
		
		var settings = {'date': null};
		if(options){
			$.extend(settings, options);
		}
		
		alert(settings['date' ]);
		
	}
})(jQuery);