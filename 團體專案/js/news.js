const swipers = new Swiper(".mySwipers-new", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        830: {
            spaceBetween: 3,
            slidesPerView: 3,
        },
        410: {
            spaceBetween: 1,
            slidesPerView: 1,
        },
        100: {
            spaceBetween: 1,
            slidesPerView: 1,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

