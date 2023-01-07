        const typeBtn = document.querySelectorAll('.type-btn')
        const menu =document.querySelector('.menu')
        const checkbox = document.querySelector('#burger')

        const menuOpBtn = document.querySelector('.btn-open')
        const menuCloseBtn = document.querySelector('.btn-close')
        
        menuOpBtn.addEventListener('click', function(){
            menuOpBtn.classList.add('none')
            menuCloseBtn.classList.remove('none')
        });
        menuCloseBtn.addEventListener('click', function(){
            menuCloseBtn.classList.add('none')
            menuOpBtn.classList.remove('none')
        });

        typeBtn.forEach(function(data){
            data.addEventListener('click', function(){
                checkbox.checked = false;
            });
        });
        
