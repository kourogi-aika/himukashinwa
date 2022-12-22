$(function(){

  $('.menu').hide();

  $('#navButton').click( function(){
    $('.menu').slideToggle();
  });
});

function fadeInAnimation(){
	$('.fadeInTarget').each(function(){
		var target = $(this).offset().top-50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= target - windowHeight){
			$(this).addClass('fadeIn');
		}
	});
}

$(window).on('load scroll', function() {
	fadeInAnimation();
});


