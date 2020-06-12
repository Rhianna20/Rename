let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
 let current = 0;

//clear image//
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
}
//Init Sliderr //
 function startSlider(){
     reset();
     sliderImages[0].style.display = 'block';
 }

//previous slide//
 function slideLeft(){
     reset();
     sliderImages[current - 1].style.display = 'block';
     current--;
 }
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}
 
// left arrow click //
 arrowLeft.addEventListener('click', function(){
    if(current === 0){
    current = sliderImages.length;
  }
    slideLeft()
 });
 //right arrow click//
  arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length){
         (current = -1)
    }
 slideRight();
});
    startSlider();
 