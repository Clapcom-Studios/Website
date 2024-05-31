/* Author:WebThemez
 * Author URI:http://webthemez.com
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 */

(function($){
	$(document).ready(function(){
	
		$(".banner-image").backstretch('images/banner.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});
		
	   $('#quote-carousel').carousel({
		 pause: true,
		 interval: 4000,
	   });
		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);




document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');
    var items = dropdownMenu.querySelectorAll('li');

    // Inicialmente, oculta todos los elementos li
    items.forEach((item) => {
        item.style.display = 'none';
    });

    dropdown.addEventListener('click', function (event) {
        event.stopPropagation(); // Previene la propagación del evento a elementos superiores
        let isShown = dropdownMenu.classList.contains('show');

        if (!isShown) {
            // Muestra y anima los elementos
            dropdownMenu.classList.add('show');
            items.forEach((item, index) => {
                item.style.display = 'list-item'; // Hace que el elemento sea visible
                item.style.animation = 'none'; // Reinicia la animación
                requestAnimationFrame(() => {
                    item.style.animation = ''; // Reasigna la animación para que se ejecute
                    item.style.animationDelay = `${index * 100}ms`; // Establece un retraso de animación para cada elemento
                });
            });
        } else {
            // Si el menú está mostrándose, se cierra sin animación de desaparición
            items.forEach((item) => {
                item.style.display = 'none';
                item.style.animation = '';
            });
            dropdownMenu.classList.remove('show');
        }
    });

    // Cierra el dropdown si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            items.forEach((item) => {
                item.style.display = 'none';
            });
        }
    });
});
