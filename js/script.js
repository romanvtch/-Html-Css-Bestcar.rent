
// Animation Images
$(function(){
    $('.rev_slider').slick({
        // dots: true,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
         
    })
})

//Adaptive for telefon and tablet
$(function(){
    $('.rev_slider2').slick({
        dots: false,
        infinite: true,
        speed: 1,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        autoplay: false,
        autoplaySpeed: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
         autoplaySpeed: 3000,
        
         
    })
})

// Responsive Menu start
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);


// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// Responsive menu end
window.onload = function(){
let preloader = document.getElementById('preloader');
preloader.classList.add('hide-preloader');
setTimeout(function(){
    preloader.classList.add('preloader-hidden')
},950)
}


$(function(){

    $('.some_link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#some_point').offset().top }, 1000);
      e.preventDefault();
    });
    
    });


$(document).ready(function(){

    $("a").on('click', function(event) {
  
     
      if (this.hash !== "") {

        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });