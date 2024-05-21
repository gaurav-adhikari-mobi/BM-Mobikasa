//ACCORDIAN SECTION ON /PAGES/SHIPPING-INFORMATION

(function($) {
  
  		$('.accordion .accordion-section-content.open').removeClass('open').css("display", "block");

		function close_accordion_section() {

			$('.accordion .accordion-section-title').removeClass('active');
			//$('.accordion .accordion-section-content').removeClass('open');
          	$('.accordion .accordion-section-content').hide();
		}

		$('.accordion-section-title').click(function(e) {
          
          if($(this).parents(".accordion").hasClass("static-has-type-list")) {
            return false;
          }

          e.preventDefault();
			// Grab current anchor value
			var currentAttrValue = $(this).attr('data-href');

			if($(e.target).is('.active')) {
                $('.accordion .accordion-section-title').removeClass('active');
                $('.accordion ' + currentAttrValue).slideUp(500);
			}else {
				close_accordion_section();

				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
                $('.accordion ' + currentAttrValue).slideDown(500);
                //$('.accordion ' + currentAttrValue).addClass('open');
			}
			
//          console.log('open')

		});

}(jQuery));