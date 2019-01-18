// Shorthand for $( document ).ready()
$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // getting year

    $('#year').html(new Date().getFullYear());
    // smooth scroll

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
         {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({ scrollTop: target.offset().top - 150 }, 1000);
                return false;
            }
        }
    });
});