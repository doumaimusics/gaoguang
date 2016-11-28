$(function(){
	$(".box .brick .brick-item").hover(function(){
$(".brick-item .floor_mask").removeClass("bian");
})
		$(".box .brick .brick-item").mouseover(function(){
   $(this).find(".floor_mask").addClass("bian");
})
		
$(".box .brick .brick-item").click(function(){
	var index = $(this).index();
	my.confirms(index);
	$(".box-box").show();
	$(".mask").show()
	$("body .close").show();
})
$("body .close").click(function(){
	$(this).hide();
	$("body .box-box").hide();
	$(".mask").hide()
	
})
})
	
	
var my = {
	confirms:function(index){
		var imgCons = [
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"},
		{src: "images/QQ图片20160315145030.jpg"}
		
		];
		var confirmsHtmls = '<img src='+imgCons[index].src+'>';
		$(".box-box").html(confirmsHtmls);
	}
}
