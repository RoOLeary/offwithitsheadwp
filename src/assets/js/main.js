;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		jQuery(document).click(function (e) {
			var clone1 = jQuery('#navigation').clone();
			jQuery('#fh5co-offcanvas').html(clone1);

			var container = jQuery("#fh5co-offcanvas, .js-fh5co-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( jQuery('body').hasClass('offcanvas') ) {

    			jQuery('body').removeClass('offcanvas');
    			jQuery('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		jQuery('#page').prepend('<div id="fh5co-offcanvas" />');
		jQuery('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		jQuery('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		jQuery('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		jQuery('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = jQuery(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = jQuery(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		jQuery(window).resize(function(){

			if ( jQuery('body').hasClass('offcanvas') ) {

				jQuery('body').removeClass('offcanvas');
				jQuery('.js-fh5co-nav-toggle').removeClass('active');
				
			}
		});
	};


	var burgerMenu = function() {

		jQuery('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = jQuery(this);


			if ( jQuery('body').hasClass('overflow offcanvas') ) {
				jQuery('body').removeClass('overflow offcanvas');
			} else {
				jQuery('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {
			jQuery(window).load(function(){
			if ( !isMobile.any() ) {
				jQuery('.js-fullheight').css('height', jQuery(window).height());
				jQuery(window).resize(function(){
					jQuery('.js-fullheight').css('height', jQuery(window).height());
				});
			}
		}); 
	};



	var contentWayPoint = function() {
		var i = 0;
		jQuery('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('animated-fast') ) {
				
				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .animate-box.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		jQuery('.has-dropdown').mouseenter(function(){

			var $this = jQuery(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = jQuery(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		jQuery('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			jQuery('html, body').animate({
				scrollTop: jQuery('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		jQuery(window).scroll(function(){

			var $win = jQuery(window);
			if ($win.scrollTop() > 200) {
				jQuery('.js-top').addClass('active');
			} else {
				jQuery('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		jQuery(".fh5co-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if (jQuery('#fh5co-counter').length > 0 ) {
			jQuery('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !jQuery(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					jQuery(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	jQuery('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					jQuery('.slider-text').removeClass('animated fadeInUp');
					jQuery('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					jQuery('.slider-text').removeClass('animated fadeInUp');
					jQuery('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	jQuery('#fh5co-hero .flexslider .slides > li').css('height', jQuery(window).height());	
	  	jQuery(window).resize(function(){
	  		jQuery('#fh5co-hero .flexslider .slides > li').css('height', jQuery(window).height());	
	  	});

	};

	
	jQuery(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		fullHeight();
	});


}());