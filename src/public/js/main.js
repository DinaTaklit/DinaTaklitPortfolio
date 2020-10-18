(function($) {
    "use strict"; // Start of use strict
    // init wow
    new WOW().init();

    // Smooth scrolling
    $('a[href*="#"]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, {duration:1600,easing:'easeInBounce'});
                return false;
            }
        }
    });


})(jQuery); // End of use strict


