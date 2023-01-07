const waves = document.querySelector('#wave-container');
        const wave = document.querySelector('.a');

        waves.addEventListener('wheel',function(e){

            if(parseInt(e.deltaY) > 0 ){
                console.log('up');
                wave.style = 'background-color: sky-blue; top: 0px; z-index: 4; opacity: 1; transition: 3s;';   
                
                (function(w, d) {
                    var bubbles = d.querySelector('.bubbles');
                    var bubblesWidth = bubbles.clientWidth;
                    var num = bubbles.getAttribute('num');
                    var duration = bubbles.getAttribute('duration');

                bubbleUp();
                    setInterval(bubbleUp, duration * 1000);

                    function bubbleUp() {
                        bubbles.innerHTML = '';
                        for(var i = 0; i < num; i++) {
                            var bubbleDiv = d.createElement('div');
                            bubbleDiv.classList.add('bubble');
                            bubbleDiv.style.cssText = `
                            transform: translate(${bubblesWidth * Math.random()}px, 0) scale(${5 * Math.random()});
                            animation: up ${duration * Math.random() + 1}s ease-in-out;
                            `
                            bubbles.appendChild(bubbleDiv);
                        };
                    };

                })(window, document);      
            }else{
                const bubbles = document.querySelector('.bubbles');
                wave.style = 'background-color: sky-blue; top:1000px; z-index: 4; opacity: 1; transition: 3s;';
                bubbles.remove;
            }            
        });