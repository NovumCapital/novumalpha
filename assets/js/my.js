function makeTimer() {
	var endTime = new Date("01 January 2020 12:00:00 GMT+08:00");			
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }

	$("#days").html(days);
	$("#hours").html(hours);
	$("#minutes").html(minutes);
	$("#seconds").html(seconds);
}


// $(window).scroll(function(){
//   var sticky = $('.header'),
//       scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('sticky');
//   else sticky.removeClass('sticky');
// });


// change link active
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//     $('.navbar-nav li').removeClass('active');
//     $(this).parent('li').addClass('active');
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });






$(document).ready(function() {
	//////////////////////////////////////////////VUE
	var app = new Vue({
  	el: '#app',
  		data: {
    		text_term: 'Term of Services',
    		text_policy: 'Privacy Policy',
    		text_copyright: 'Copyright 2019 @Novum Alpha. All rights reserved.',
  		}
	});

	////////////////////////////////nav
	var url = document.location.href;
	if (url.indexOf('#') > 0) {
		var activeEl = url.substring(url.indexOf('#') + 1, url.length);
		$('header .navbar-nav li').removeClass('active');
		$('header a[href^="#' + activeEl + '"]').parent().addClass('active');
	}

	$("header .nav-item .nav-link").on("click", function(){
	   $("header .navbar").find(".active").removeClass("active");
	   $(this).addClass("active");
	});
});
