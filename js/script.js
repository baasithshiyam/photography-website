var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
autoSlider();
function autoSlider() {
    var i;
    var slides = document.getElementsByClassName("home-slider-images");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(autoSlider, 4000);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("home-slider-images");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// THOUGHTS





const cards = document.querySelectorAll('.card');
    function toggleOpen() {
      this.classList.toggle('open');
     for (i = 0; i < cards.length; i++) {
       if ( cards[i] !== this)
       cards[i].classList.toggle('close')
     }
}
 cards.forEach(card => card.addEventListener('click', toggleOpen));

 document.getElementById('pets').addEventListener('click',function(){
   let cl = document.getElementById('gallery').style.display
   console.log(cl,'gfjagj')
   if (cl == '' || cl == 'none'){
    document.getElementById('gallery').style.display = 'block'
   }else{
    document.getElementById('gallery').style.display = 'none'
   }
 })

 document.getElementById('animals').addEventListener('click',function(){
  let cl = document.getElementById('gallery1').style.display
  console.log(cl,'gfjagj')
  if (cl == '' || cl == 'none'){
   document.getElementById('gallery1').style.display = 'block'
  }else{
   document.getElementById('gallery1').style.display = 'none'
  }
})
document.getElementById('bird').addEventListener('click',function(){
  let cl = document.getElementById('gallery2').style.display
  console.log(cl,'gfjagj')
  if (cl == '' || cl == 'none'){
   document.getElementById('gallery2').style.display = 'block'
  }else{
   document.getElementById('gallery2').style.display = 'none'
  }
})
document.getElementById('travel').addEventListener('click',function(){
  let cl = document.getElementById('gallery3').style.display
  console.log(cl,'gfjagj')
  if (cl == '' || cl == 'none'){
   document.getElementById('gallery3').style.display = 'block'
  }else{
   document.getElementById('gallery3').style.display = 'none'
  }
})

document.getElementsByClassName('img-responsive')[0].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cat'
  

})

document.getElementsByClassName('fa-times')[0].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'none'
})

document.getElementsByClassName('img-responsive')[1].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The happy cat'
  

})

document.getElementsByClassName('img-responsive')[2].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2043&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The black cat'
})

document.getElementsByClassName('img-responsive')[3].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The small cat'
})

document.getElementsByClassName('img-responsive')[4].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1692&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The white cat'
})

document.getElementsByClassName('img-responsive')[5].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'PETS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute cat'
})

document.getElementsByClassName('img-responsive')[6].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute dear'
})

document.getElementsByClassName('img-responsive')[7].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute butterfly'
})

document.getElementsByClassName('img-responsive')[8].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute macaw'
})

document.getElementsByClassName('img-responsive')[9].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute wolf'
})

document.getElementsByClassName('img-responsive')[10].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1445820200644-69f87d946277?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=986&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute pelecon'
})

document.getElementsByClassName('img-responsive')[11].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'ANIMALS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[12].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})


document.getElementsByClassName('img-responsive')[13].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1548509925-0e7aa59c6bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[14].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})


document.getElementsByClassName('img-responsive')[15].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1480044965905-02098d419e96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[16].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1507091249509-ea24980b1218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[17].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'BIRDS'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[18].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80'

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[19].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})


document.getElementsByClassName('img-responsive')[20].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2021&q=80"
  

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})


document.getElementsByClassName('img-responsive')[21].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2119&q=80"
  

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})


document.getElementsByClassName('img-responsive')[22].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
  

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

document.getElementsByClassName('img-responsive')[23].addEventListener('click',function(){
  document.getElementsByClassName('black-box')[0].style.display = 'block'
  document.getElementsByClassName('image')[0].src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
  

  document.getElementsByClassName('port-heading')[0].innerHTML = 'TRAVEL'
  document.getElementsByClassName('port-discription')[0].innerHTML = 'The cute whild cat'
})

function setImage(image){
  var img = document.getElementById("thought-image");
  switch(image){
    case 1:
      img.src = "../Assets/images/thoughts-1.png";
      break;
    case 2:
      img.src = "../Assets/images/thoughts-2.png";
      break;
    case 3:
      img.src = "../Assets/images/thoughts-3.png";
      break;
    default:
      img.src = "../Assets/images/thoughts-1.png";
      break;
  }
}
