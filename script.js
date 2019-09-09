


$('#fonction').keydown(function(e) {
  // affiche position top et left
  console.log('top :' + $('.square').offset().top);
  console.log('left :' + $('.square').offset().left);

  switch (e.which) {
    case 37: // fleche gauche
    //left
      if ($('.square').offset().left <= -60){
            $('.square').offset({
          left: $(window).outerWidth()
      });
    }
      $('.square').animate({
        left: '-=60'
      });
      break;
    case 38: // fleche haut
      if ($('.square').offset().top <= -60) {
        $('.square').offset({
          top: $(window).outerHeight()
        });
      }
      console.log($('.square').offset().top);
      $('.square').animate({
        top: '-=60'
      });
      break;
    case 39: // fleche droite ok
      if ($('.square').offset().left >= $(window).width()) {

        $('.square').offset({
          left: 0
        });
      };
      $('.square').animate({
        left: '+=60'
      });
      break;
    case 40: // fleche bas
      if ($('.square').offset().top >= $(window).height()) {

        $('.square').offset({
          top: 0
        });
      };
      $('.square').animate({
        top: '+=60'
      });
      break;
      default:
      Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'Vous n',
  footer: '<a href>Why do I have this issue?</a>'
})
  }
});
