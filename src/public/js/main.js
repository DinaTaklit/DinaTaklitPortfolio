(function($) {
    "use strict"; // Start of use strict
    // init wow
    new WOW().init();


    // Smooth scrolling using jQuery easing with other links
    $('a[href*="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

})(jQuery); // End of use strict


