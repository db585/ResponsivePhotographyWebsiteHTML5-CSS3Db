// Animate smooth scroll
// NOTE: doesn't work
// $('#view-work').on('click', function () {
//   // const images = $('images').offset().top;
// 
//   $('html, body').animate({
//       scrollTop: $('images').offset().top
//     },
//     1000,
//     }
//   );
// });

// Animate smooth scroll from 2018-08  ResponsiveLandingPageHTML&CSSDb project
$('#view-work').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800,
      function () {
        window.location.hash = hash;
      }
    );
  }
});