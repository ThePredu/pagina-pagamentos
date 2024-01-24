var btn = document.querySelector('#pix-btn')
var container = document.querySelector('#pix')
var btn2 = document.querySelector('#card-btn')
var container2 = document.querySelector('#credit-card')

btn.addEventListener('click', function(){

    if(container.style.display === 'block'){
        container.style.display = 'none';
    } else{
        container.style.display = 'block'
    }

})

btn2.addEventListener('click', function(){

    if(container2.style.display === 'block'){
        container2.style.display = 'none';
    } else{
        container2.style.display = 'block'
    }

})