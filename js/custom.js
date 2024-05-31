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
	$(document).ready(function() {
		const students = [
			{ id: 1, name: "Arnau González Acosta", img: "images/students/Arnau González Acosta.jpeg", description: "Descripción del estudiante 1 y los elementos desarrollados.", projectImg: "images/projects/project1.jpg" },
			{ id: 2, name: "Alberto Hidalgo Garcia", img: "images/students/Alberto Hidalgo Garcia.jpeg", description: "Descripción del estudiante 2 y los elementos desarrollados.", projectImg: "images/projects/project2.jpg" },
			{ id: 3, name: "Francesc Teruel Rodríguez", img: "images/students/Francesc Teruel Rodríguez.jpg", description: "Descripción del estudiante 3 y los elementos desarrollados.", projectImg: "images/projects/project3.jpg" },
			{ id: 4, name: "Dani Mañas Calvo", img: "images/students/Dani Mañas Calvo.jpg", description: "Descripción del estudiante 4 y los elementos desarrollados.", projectImg: "images/projects/project4.jpg" },
			{ id: 5, name: "David Ruiz", img: "images/students/David Ruiz.png", description: "Descripción del estudiante 5 y los elementos desarrollados.", projectImg: "images/projects/project5.jpg" },
			// Add objects for each student up to Student 35
		];

		let cardsHtml = '';
		let modalsHtml = '';

		students.forEach(student => {
			// Generate card HTML
			cardsHtml += `
				<div class="col-md-4">
					<div class="card student-card" data-bs-toggle="modal" data-bs-target="#studentModal${student.id}">
						<img src="${student.img}" class="card-img-top" alt="${student.name}">
						<div class="card-body">
							<h5 class="card-title">${student.name}</h5>
						</div>
					</div>
				</div>
			`;

			// Generate modal HTML
			modalsHtml += `
				<div class="modal fade" id="studentModal${student.id}" tabindex="-1" aria-labelledby="studentModalLabel${student.id}" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="studentModalLabel${student.id}">${student.name}</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<p>${student.description}</p>
								<img src="${student.projectImg}" alt="Project of ${student.name}" class="img-fluid">
							</div>
						</div>
					</div>
				</div>
			`;
		});

		$('#student-cards-row').html(cardsHtml);
		$('#student-modals').html(modalsHtml);
	});
})(this.jQuery);