const swipers2 = new Swiper(".mySwipers-weather", {
    // 控制呈現數量
    slidesPerView: 6,
    // 移動數量
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    breakpoints:{
        spaceBetween: 6,
        // slidesPerView: 6,
        830: {
            // 間隔距離
            spaceBetween: 10,
            slidesPerView: 6,
        },
        410: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        100: {
            spaceBetween: 10,
            slidesPerView: 1,
        },

    },
    pagination: {
        el: ".swiper-pagination",
        // clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });