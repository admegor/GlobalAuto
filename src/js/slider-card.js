$(document).ready(function(){
    lightGallery(document.getElementById('lightgallery'));
    $('.card-image__slider-preview').slick({
        slidesToShow: 4,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: '.card-image__slider-big',
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
          ]
    });
    $('.card-image__slider-big').slick({
        slidesToShow: 1,
		asNavFor: '.card-image__slider-preview',
		arrows: false,
        fade: true,
        
    })
});