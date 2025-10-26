$(document).ready(function () {
    // $('.mobile-menu-btn').click(function () {
    //     $(this).toggleClass('active');
    //     $('nav ul').toggleClass('active');
    // });

    // // menu close on click
    // $('nav ul li a').click(function () {
    //     if ($('nav ul').hasClass('active')) {
    //         $('nav ul').removeClass('active');
    //         $('.mobile-menu-btn').removeClass('active');
    //     }
    // });


    // Optional improvement: make scroll/touch listeners passive
    jQuery.event.special.touchstart = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };
    jQuery.event.special.touchmove = {
        setup: function (_, ns, handle) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
        }
    };

})


