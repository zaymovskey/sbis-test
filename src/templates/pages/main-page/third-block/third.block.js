new Swiper('.clients-slider', {
    navigation: {
        nextEl: '.clients-slider__next-button',
        prevEl: '.clients-slider__prev-button',
    },
    slidesPerView: 5,
})

new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.reviews-slider__next-button',
        prevEl: '.reviews-slider__prev-button',
    },
    slidesPerView: 3,
    spaceBetween: 24,
})
