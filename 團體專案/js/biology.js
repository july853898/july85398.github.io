        const circle = document.querySelectorAll('#circle')
        const closeBtn = document.querySelectorAll('.close-btn')

        // 鳥類區
        const birdsec = document.querySelector('.bird-sec')
        const birdbgc = document.querySelector('.bird-bgc')

        // 植物區
        const plantsec = document.querySelector('.plant-sec')
        const plantbgc = document.querySelector('.plant-bgc')      

        // 潮間帶區
        const crabsec = document.querySelector('.crab-sec')
        const crabbgc = document.querySelector('.crab-bgc')

        circle.forEach(function(data){
            data.addEventListener('click', function(){
                if (data.dataset.intro == '鳥類'){
                    birdsec.style.display = 'block'
                }
                if (data.dataset.intro == '植物'){
                    plantsec.style.display = 'block'
                }
                if (data.dataset.intro == '潮間帶生物'){
                    crabsec.style.display = 'block'
                }
            });
            
        });
        birdbgc.addEventListener('click', function(){
            birdsec.style.display = 'none'
        });
        plantbgc.addEventListener('click', function(){
            plantsec.style.display = 'none'
        });
        crabbgc.addEventListener('click', function(){
            crabsec.style.display = 'none'
        });

        closeBtn.forEach(function(closebtn){
            closebtn.addEventListener('click', function(){
                birdsec.style.display = 'none'
                plantsec.style.display = 'none'
                crabsec.style.display = 'none'
            });
        });

        var swiper = new Swiper(".mySwiper-bird", {
            loop: true,
            spaceBetween: 5,
            slidesPerView: 8,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                830: {
                    spaceBetween: 5,
                    slidesPerView: 8,
                },
                410: {
                    spaceBetween: 5,
                    slidesPerView: 3,
                },
                100: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
            }
          });
          var swiper2 = new Swiper(".mySwiper2-bird", {
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });
          
          var swiper = new Swiper(".mySwiper-plant", {
            loop: true,
            spaceBetween: 5,
            slidesPerView: 8,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                830: {
                    spaceBetween: 5,
                    slidesPerView: 8,
                },
                410: {
                    spaceBetween: 5,
                    slidesPerView: 3,
                },
                100: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
            }
          });
          var swiper2 = new Swiper(".mySwiper2-plant", {
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });  
          
          var swiper = new Swiper(".mySwiper-crab", {
            loop: true,
            spaceBetween: 5,
            slidesPerView: 8,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                830: {
                    spaceBetween: 5,
                    slidesPerView: 8,
                },
                410: {
                    spaceBetween: 5,
                    slidesPerView: 3,
                },
                100: {
                    spaceBetween: 5,
                    slidesPerView: 2,
                },
            }
          });
          var swiper2 = new Swiper(".mySwiper2-crab", {
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiper,
            },
          });

        