// mixitup

var mixer = mixitup('.gallery');

// owl carousel
$(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');

// animation plugin || aos
AOS.init({
    duration: 3000
});