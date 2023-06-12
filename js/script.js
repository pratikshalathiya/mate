$(document).ready(function(){

  // scroll--------

    window.addEventListener('scroll', function() {
     const header = document.getElementById('header');
     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   
     if (scrollTop > 0) {
       header.classList.add('scrolled');
     } else {
       header.classList.remove('scrolled');
     }
   })

   // --------------main active menu-------------

   $('.lap-menu > li > a').click(function(){

    $('.lap-menu').find('li a').removeClass('active');

    $(this).addClass('active');

  })

   //   ----------------scroll event----------------

   $(window).on('scroll',function(){

    x = $(Window).scrollTop();
    // console.log(x);

    if(x>=200){
         $('#scroll-top').css('opacity','1');
    }
    else{
         $('#scroll-top').css('opacity','0');
    }

})

$('#scroll-top').click(function(){

    $(window).scrollTop({top:0})

});

  //  header-----------

     $('.tablate-menu').hide();
     $('.sidebar').click(function(){

          $('.tablate-menu').slideToggle();
          $('.sidebar').toggleClass('fa-angle-down');

     });

     // portfolio--------------

    // init Isotope
    var $grid = $('.grid').isotope({
      // options
      });
      // filter items on button click
      $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });

      $('.filter-button-group').find('button').removeClass('active');
      $(this).addClass('active');

      });

      $("a.layer").fancybox({
           'transitionIn'	:	'elastic',
           'transitionOut'	:	'elastic',
           'speedIn'		:	600, 
           'speedOut'		:	200, 
           'overlayShow'	:	false
      });

      // counter-------------------

      // select the element
      const counters = document.querySelectorAll('.counter');

      // iterate through all the counter elements
      counters.forEach(counter => {
        // function to increment the counter
        function updateCount() {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerHTML;

          const inc = Math.floor((target - count) / 100);

          if (count < target && inc > 0) {
            counter.innerHTML = (count + inc);
            // repeat the function
            setTimeout(updateCount, 10);
          }
          // if the count not equal to target, then add remaining count
          else {
            counter.innerHTML = target;
          }
        }
        updateCount();
      });

});