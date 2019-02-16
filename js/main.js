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
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1000) {
      $("columna").css('animation-name', 'columna');
    }
    else {
      
    }

  }
  )
}
)
