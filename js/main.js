var $root = $('html, body');
$(document).ready(function() {
    $('.one-item-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<img src="images/prev.png" alt="prev">', '<img src="images/next.png" alt="next">'],

    })

    $('.one-item-slider-review').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        navText: ['<img src="images/prev.png" alt="prev">', '<img src="images/next.png" alt="next">'],
        onInitialized: carouselInitialized,
        onChanged: carouselnChanged
    })

    function carouselInitialized(event) {
        var element = event.target;
        var currenItem = $('.one-item-slider-review').find('.owl-item').eq(event.item.index + 1)
        var imgSrc = currenItem.find('.review-img-wrapper img').attr("src");
        var name = currenItem.find('.review-text-name').text();
        var position = currenItem.find('.review-text-position ').text();
        $('.one-item-slider-review').find('.owl-nav').append('<div class="owl-nav-img"><div class="owl-nav-img-wrapper"><div class="owl-nav-img-inner"><img src=""></div></div><div class="owl-nav-img-description"><div class="owl-nav-img-name"></div><div class="owl-nav-img-position"></div></div></div>')
        $('.owl-nav-img-wrapper img').attr("src", imgSrc);
        $('.owl-nav-img-name').text(name);
        $('.owl-nav-img-position').text(position);
    }

    function carouselnChanged(event) {
        var currenItem = $('.one-item-slider-review').find('.owl-item').eq(event.item.index + 1)
        var imgSrc = currenItem.find('.review-img-wrapper img').attr("src");
        var name = currenItem.find('.review-text-name').text();
        var position = currenItem.find('.review-text-position').text();
        $('.owl-nav-img-wrapper img').attr("src", imgSrc);
        $('.owl-nav-img-name').text(name);
        $('.owl-nav-img-position').text(position);
    }
})

$('[data-button-hover]').on('mouseenter', function() {
    $(this).parents('.prices-price-wrapper').addClass('active');
}).on('mouseleave', function() {
    $('.prices-price-wrapper').removeClass('active');
})
    