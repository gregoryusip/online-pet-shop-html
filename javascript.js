var show = document.getElementById("navbar-link");
function openMenu(){
    show.style.right = "0";
}
function closeMenu(){
    show.style.right = "-200px";
}

function toggleForm(){
    var container = document.querySelector('.container');
     container.classList.toggle('active')
}

$(document).ready(function() {
    // $('#autoWidth').lightSlider({
    //     autoWidth:true,
    //     loop:true,
    //     onSliderLoad: function() {
    //         $('#autoWidth').removeClass('cS-hidden');
    //     } 
    // });  

    $('.post-wrapper').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

      nextArrow: $('.next'),
      prevArrow: $('.prev'),
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

  });

  $(function(){

    $('input[type="number"]').niceNumber();
  
  });

