$(document).ready(function(){
	$('.names li:first').append(' (First)');
	$('.names li:last').append(' (Last)');
	
	$('.names').find('li').first().append(' (First)');
	$('.names').find('li').first().next().append(' (Second)');
	$('.names').find('li').last().append(' (Last)');
	
});