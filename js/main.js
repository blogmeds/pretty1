$(document).ready(function () {
   var offset = $('.fixed_box').offset();
 var topPadding = 0;
 $(window).scroll(function() {
     if ($(window).scrollTop() > offset.top) {
         $('.fixed_box').css({
            'position': 'fixed',
            'top': '0',
            'width': '267px'
         });
         // $('.fixed_box').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding});
     }
     else {
         // $('.fixed_box').stop().animate({marginTop: 0});
         $('.fixed_box').css('position', 'static');
     }
 });
});