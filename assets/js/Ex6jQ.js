$(".color").hover(function(){
	colorDiv=$(this).attr('id');
	$("#text").css('color',colorDiv);
},(function(){
	$('#text').css('color','black');
}));