//Skipprの初期化
$("document").ready(function(){
	$(".theTarget").skippr();
})

//オプション指定 Skipprの実行
$(".theTarget").skippr({
	transition : 'fade',
	speed : 1000,
	easing : 'easeOutQuart',
	navType : 'block',
	childrenElmentType : 'div',
	arrows : true,
	autoPlay : false,
	autoPlayDuration : 5000,
	keyboardOnAlways : true,
	hidePrevious : false
});

$(function(){
	$('#back a').on('click',function(){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		retrun false;
	});
});