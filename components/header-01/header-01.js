$(document).ready(function() {  
var stickyNavTop = $('.main-nav').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.main-nav').addClass('sticky');  
} else {  
    $('.main-nav').removeClass('sticky');   
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});  