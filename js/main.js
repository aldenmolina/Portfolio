// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .button, .button2').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Add animation on scroll
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1350 ) {
      $("#goals").css("animation-name", "goals")
    }
    else if ($(document).scrollTop() > 700 ) {
      $(".portfolio2").css("animation-name", "portfolio2");
      $(".portfolio-right").css("animation-name", "portfolio-right")
    }
    else if ($(document).scrollTop() > 5) { 
      $(".columna").css("animation-name", "columna"); 
    } 
  });
});