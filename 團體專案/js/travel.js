const btns = document.querySelectorAll('.button')
        const map  = document.querySelector('.map')
        const mini1  = document.querySelector('.mini-box1')
        const mini2  = document.querySelector('.mini-box2')

        btns.forEach(function(btn){
            btn.addEventListener('click',function(){

                if(btn.dataset.intro == '觀光地圖'){
                    map.style.display = 'block'
                    mini1.style.display = 'none'
                    mini2.style.display = 'none'
                }
                if(btn.dataset.intro == '遊程安排'){
                    map.style.display = 'none'
                    mini1.style.display = 'block'
                    mini2.style.display = 'none'
                }
                if(btn.dataset.intro == '導覽解說'){
                    map.style.display = 'none'
                    mini1.style.display = 'none'
                    mini2.style.display = 'block'
                }
            });
        });

        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: 1,
            mousewheel: true,
            speed: 800,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });