const introduce = document.querySelectorAll('.introduce')
        const introduceMapping = {
            '0': '高美濕地簡介',
            '1': '生態現狀',
            '2': '人文歷史',
            '3': '濕地的功能'   
        }
        const introSec = document.querySelectorAll('.intro-sec')


        // 高美濕地簡介
        const texseca = document.querySelector('.text-seca')
        const bgca = document.querySelector('.bgca')       
        const btna = document.querySelector('.btna')
        // 生態現狀
        const texsecb = document.querySelector('.text-secb')
        const bgcb = document.querySelector('.bgcb')       
        const btnb = document.querySelector('.btnb')
        // 人文歷史
        const texsecc = document.querySelector('.text-secc')
        const bgcc = document.querySelector('.bgcc')       
        const btnc = document.querySelector('.btnc')
        // 濕地的功能
        const texsecd = document.querySelector('.text-secd')
        const bgcd = document.querySelector('.bgcd')       
        const btnd = document.querySelector('.btnd')

        
        function introlock (){
            introSec.forEach((detail,index) => {
                introSec[index].style.display = 'none';
            });    
        }
        introduce.forEach(function(data,index){
            data.addEventListener('click',function(){
                if(data.dataset.intro === introduceMapping[index]){
                    introlock();
                    introSec[index].style.display = 'block'
                }
            });
        });
        bgca.addEventListener('click',function(){
            texseca.style.display = 'none'
        });
        btna.addEventListener('click',function(){
            texseca.style.display = 'none'
        });

        bgcb.addEventListener('click',function(){
            texsecb.style.display = 'none'
        });
        btnb.addEventListener('click',function(){
            texsecb.style.display = 'none'
        });

        bgcc.addEventListener('click',function(){
            texsecc.style.display = 'none'
        });
        btnc.addEventListener('click',function(){
            texsecc.style.display = 'none'
        });

        bgcd.addEventListener('click',function(){
            texsecd.style.display = 'none'
        });
        btnd.addEventListener('click',function(){
            texsecd.style.display = 'none'
        });