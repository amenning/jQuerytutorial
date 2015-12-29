(function($){
	$.fn.hoverText = function (){
		$(this).after('<div id="hoverText"></div>');
		
		var title = $(this).attr('title');
		
		if(title != undefined && title != ''){
			
			$(this).mousemove(function(e){
				var y = e.clientY + 10;
				var x = e.clientX + 10;
				
				$('#hoverText').css('top', y).css('left',x).text(title).show();
			}).mouseout(function(){
				$('#hoverText').hide();
			});
			
		}
	}
})(jQuery);