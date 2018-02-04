const carousel = $('#carousel'),
          slideWidth = 250;

      $('#next').click(function(){ shiftSlide(-1) })
      $('#prev').click(function(){ shiftSlide(1) })

      function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        carousel.addClass('transition')
                .css('transform','translateX(' + (direction * slideWidth) + 'px)');
        setTimeout(function(){
          if (direction === 1) {
            $('.slide:first').before($('.slide:last'));
          } else if (direction === -1) {
            $('.slide:last').after($('.slide:first'));
          }
          carousel.removeClass('transition')
      		carousel.css('transform','translateX(0px)');
        }, 700)
      }
