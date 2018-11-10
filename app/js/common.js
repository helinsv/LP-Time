document.querySelector('.bottom-menu li:nth-child(2) a').textContent = 'Terms of Use';
document.querySelector('.bottom-menu li:nth-child(3) a').textContent = 'FAQ';

$(document).ready(function() {
	$('.btn-toggle').click(function(){
		$('.top-menu').slideToggle(300, function(){
			if ($(this).css('display')==='none'){
				$(this).removeAttr('style');
			}});	
	})

	var owl = $(".slide-team");
	owl.owlCarousel({
		loop:false,
		margin:10,
    nav:false,
    responsiveClass:true,
    responsive:{
    	0:{
    		items:1,
    		dots:true
      },
      400:{
       items:2,
       dots:true            
     },
     600:{
       items:3,
       dots:true
     },
     1000:{
       items:4,
       dots:false
     }
   }
 });
	
	$('a.popupbox-video').fancybox({
		type:'swf'
	});

	$('.preview').fancybox({
		type:'swf'
	});

  var dt = "Dec 25 2018 20:30:15";
  var first = new Date(dt);
  var last = Date.now();
  var remaining = first - last;
  remaining /= 1000;
  var timer = new Timer();
  timer.start({countdown: true, startValues: {seconds: remaining}});
  $('#countdownExample .values').html(timer.getTimeValues().toString());
  timer.addEventListener('secondsUpdated', function (e) {
    $('.clock .day').html(timer.getTimeValues().toString(['days'])+'d');
    $('.clock .hour').html(timer.getTimeValues().toString(['hours'])+'h');
    $('.clock .minute').html(timer.getTimeValues().toString(['minutes'])+'m');
    $('.clock .secound').html(timer.getTimeValues().toString(['seconds'])+'s');
  });    

});