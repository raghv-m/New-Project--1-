
$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        nav: false,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: false,
            }
        }
    })

    // Special Services 

    $('#special-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 5,
        margin: 20,
        dots: false,
        smartSpeed: 600,
        center: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            },
            1200: {
                items: 4,
               
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 3,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,

    })

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });

            // Whatsapp button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.whatsapp').fadeIn('slow');
            } else {
                $('.whatsapp').fadeOut('slow');
            }
        });
});
