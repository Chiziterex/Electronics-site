let indexValue = 1;

showImg(indexValue);

function btnSlide(e){
    showImg(indexValue = e);
}

function arrowSlide(e){
    showImg(indexValue += e);
}

function showImg(e){
    
    var i;

    const img = document.querySelectorAll('.img');
    const btnSliders = document.querySelectorAll('.btn-sliders span');

    if(e > img.length){
        indexValue = 1;
    }
    if(e < 1){
        indexValue = img.length;
    }

    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for(i = 0; i < btnSliders.length; i++){
        btnSliders[i].style.background = "#191970";
    }
    img[indexValue-1].style.display = "block";
    btnSliders[indexValue-1].style.background = "white";
}

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
