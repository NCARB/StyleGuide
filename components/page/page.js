/*JS for responsive menus, taken from www*/


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


var NCARB = NCARB || {};
NCARB.Home = NCARB.Home || {};
NCARB.Home.App = NCARB.Home.App || {};

NCARB.Home.App = (function (window) {
    "use strict";

    // Dependencies
    // ------------
    var $ = window.jQuery,

    // Private methods
    // ---------------

    scrollzero = function () {
        if (location.hash){
            setTimeout(function () {
                if (!window.pageYOffset) {window.scrollTo(0, 1);}
            }, 1000);
        }
    },
    dominsertions = function () {
        $('.canvas').prepend('<div class="canvas-blackout"></div>');
        $('.header-brand').append('<p class="off-canvas-toggle"><a href="#off-canvas" class="off-canvas"></a></p>');
        $('body').append('<div class="strip-bottom" role="presentation"></div>');
    },
    domMove = function (tshirtsize) {
        var $el = $('[data-destination]');

        $el.each(function () {
            var $self = $(this);
            var origin = '#' + $self.data('origin');
            var destination = '#' + $self.data('destination');
            var position = $self.data('position');
            var $myNcarb = $('.my-ncarb');
            var elHTML = $self.clone();

            var breakpoint = $self.data('breakpoint');

            if (tshirtsize === 'MLL') {
                if (position === 'bottom')
                    {$(destination).append(elHTML);}
                else
                    {$(destination).prepend(elHTML);}
                $self.remove();
            } else if (tshirtsize === 'MML') {
                if (breakpoint === "MML") {
                    if (position === 'bottom')
                        {$(destination).append(elHTML);}
                    else
                        {$(destination).prepend(elHTML);}
                    $self.remove();
                } else {
                    $(origin).prepend(elHTML);
                    $self.remove();
                }
            } else if (tshirtsize === 'S') {
                if (position === 'bottom')
                    {elHTML.insertAfter($myNcarb);}
                else
                    {$(origin).prepend(elHTML);}
                $self.remove();
            }
            sliderbuild();
        });
    },
    viewport = function () {
        var width = $('body').width();

        if (width < 672) {
            domMove('S');
        } else if (width > 671 && width < 864) {
            domMove('MML');
        } else if (width > 863) {
            domMove('MLL');
        }
    },
    offcanvas = function () {
        $('.off-canvas, .canvas-blackout').click(function () {
            $('.canvas').toggleClass('is-pushed');
            $('body').toggleClass('canvas-is-pushed');
            return false;
        });
    },
    offcanvasleveltwo = function () {
        $('.level-two_toggle').click(function (event) {
            event.preventDefault();
            var $self = $(this);
            var $leveltwo = $self.parent().find('.level-two');
            $self
                .parent()
                .toggleClass('is-toggled')
            ;
        });
    },
    searchmobile = function () {
        $('.search-toggle-target').click(function (event) {
            var $self = $(this);
            $self.closest('.header-brand').toggleClass('is-searching');
            $('#' + $self.attr('for')).focus();
        });
    },
    initialize = function () {
        dominsertions();
        scrollzero();
        viewport();
        offcanvas();
        offcanvasleveltwo();
        searchmobile();
        $('input, textarea').placeholder();
        $(window).resize(viewport);
    };

    // end var

    // Public methods
    // --------------
    return {
        init: initialize
    };

} (window));




(function ($) {
    $(document).ready(function () {
        "use strict";

        NCARB.Home.App.init();
    });
})(jQuery);