var $root = $('html, body');
$(document).ready(function() {
    $('.one-item-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<img src="images/prev.png" alt="prev">', '<img src="images/next.png" alt="next">']
    })
})

    