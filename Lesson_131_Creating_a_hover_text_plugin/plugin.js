(function($){
	$.fn.hoverText = function (){
		$(this).after('<div id="hoverText"></div>');
			
		$(this).mousemove(function(e){
			var title = $(this).attr('title');
			
			var y = e.clientY + 10;
			var x = e.clientX + 10;
			
			$(this).attr('title','');
			$('#hoverText').css('top', y).css('left',x).text(title).show();
			$(this).attr('title',title);
			
		}).mouseout(function(){
			$('#hoverText').hide();
		});
	}
})(jQuery);