
const loading = document.querySelector('.loading')
function move() {
    var elem = document.querySelector(".myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            loading.style.opacity = '0'
            loading.style.transition = '1s'
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}   
move()
loading.addEventListener('transitionend',function(e){
    if(e.propertyName == 'opacity'){
        loading.style.display = 'none'
    }
});

