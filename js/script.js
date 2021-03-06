/* Template	:	ICO Crypto v1.2.0 */
(function($){
	'use strict';
	var $win = $(window), $body_m = $('body'), $navbar = $('.navbar');
	
	// Touch Class
	if (!("ontouchstart" in document.documentElement)) {
		$body_m.addClass("no-touch");
	}
	// Get Window Width
	function winwidth () {
		return $win.width();
	}
	var wwCurrent = winwidth();
	$win.on('resize', function () { 
		wwCurrent = winwidth(); 
	});

	// Sticky
	var $is_sticky = $('.is-sticky');
	if ($is_sticky.length > 0 ) {
		var $navm = $('#mainnav').offset();
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991) {
				if($scroll > $navm.top ){
					if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
				} else {
					if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
				}
			} else {
				if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
			}
		});
	}
	
	// OnePage Scrolling
	$('a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var toHash = $(this.hash), toHashN = (this.hash.slice(1)) ? $('[name=' + this.hash.slice(1) + ']') : false, nbar = (wwCurrent >= 992) ? $navbar.height() - 1 : 0;

			toHash = toHash.length ? toHash : toHashN;
			if (toHash.length) {
				$('html, body').animate({
					scrollTop: (toHash.offset().top - nbar)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	
	// Active page menu when click
	var CurURL = window.location.href, urlSplit = CurURL.split("#");
	var $nav_link = $(".nav li a");
	if ($nav_link.length > 0) {
		$nav_link.each(function() {
			if (CurURL === (this.href) && (urlSplit[1]!=="")) {
				$(this).closest("li").addClass("active").parent().closest("li").addClass("active");
			}
		});
	}
	
	// Bootstrap Dropdown 
	var $dropdown_menu = $('.dropdown');	
	if ($dropdown_menu.length > 0 ) {
		$dropdown_menu.on("mouseover",function(){
			if ($win.width() > 991) {
				$('.dropdown-menu', this).not('.in .dropdown-menu').stop().fadeIn("400");
				$(this).addClass('open'); 
			}
		});
		$dropdown_menu.on("mouseleave",function(){
			if ($win.width() > 991) {
				$('.dropdown-menu', this).not('.in .dropdown-menu').stop().fadeOut("400");
				$(this).removeClass('open'); 
			}
		});
		$dropdown_menu.on("click",function(){
			if ($win.width() < 991) {
				$(this).children('.dropdown-menu').fadeToggle(400);
				$(this).toggleClass('open'); 
				return false;
			}
		});
		
	}
	$win.on('resize', function() {
		$('.navbar-collapse').removeClass('in');
		$dropdown_menu.children('.dropdown-menu').fadeOut("400");
	});

	// remove ani
	var $navtoggler = $('.navbar-toggler'), $trannav =$('.is-transparent');
	if ($navtoggler.length > 0) {
		$navtoggler.on("click",function(){
			$('.remove-animation').removeClass('animated');
			if (!$trannav.hasClass('active')) {
				$trannav.addClass('active');
			}else{
				$trannav.removeClass('active');
			}
		});
	}
	
	// Select
	var $selectbox = $('select');
	if ($selectbox.length > 0) {
		$selectbox.select2();
	}
	
	// Nav collapse
	$('.menu-link').on("click",function() {
		$('.navbar-collapse').collapse('hide');
		$trannav.removeClass('active');
	});
	$(document).on('mouseup', function(e){
		if (!$trannav.is(e.target) && $trannav.has(e.target).length===0) {
			$('.navbar-collapse').collapse('hide');
			$trannav.removeClass('active');
		}
	});
	
	//Carousel
	var $timeline_carousel = $('.timeline-carousel');
	if ($timeline_carousel.length > 0 ) {
		var c_rtl = ($body_m.hasClass('is-rtl')) ? true : false;
		$timeline_carousel.addClass('owl-carousel').owlCarousel({
			navText: ["<i class='ti ti-angle-left'></i>","<i class='ti ti-angle-right'></i>"],
			items:6,
			nav:true,
			margin:30,
			rtl: c_rtl,
			responsive:{
				0 : {
					items:1,
				},
				400 : {
					items:2,
					center:false,
				},
				599 : {
					items:3,
				},
				1024 : {
					items:5,
				},
				1170 : {
					items:6,
				}
			}
		});
	}
	
	//Carousel
	var $roadmap_carousel = $('.roadmap-carousel');
	if ($roadmap_carousel.length > 0 ) {
		var c_rtl_r = ($body_m.hasClass('is-rtl')) ? true : false;
		$roadmap_carousel.addClass('owl-carousel').owlCarousel({
			items:6,
			nav:false,
			dost:true,
			margin:30,
			rtl: c_rtl_r,
			responsive:{
				0 : {
					items:1,
				},
				400 : {
					items:2,
					center:false,
				},
				599 : {
					items:3,
				},
				1024 : {
					items:4,
				},
				1170 : {
					items:5,
				}
			}
		});
	}	

	//Carousel
	var $has_carousel = $('.has-carousel');
	if ($has_carousel.length > 0 ) {
		var c_rtl_c = ($body_m.hasClass('is-rtl')) ? true : false;
		$has_carousel.each(function(){
			var $self = $(this);
			var c_item = ($self.data('items')) ? $self.data('items') : 4;
			var c_item_t = (c_item >= 3) ? 2 : c_item;
			var c_item_m = (c_item_t >= 2) ? 1 : c_item_t;
			var c_delay =($self.data('delay')) ? $self.data('delay') : 6000;
			var c_auto =($self.data('auto')) ? true : false;
			var c_loop =($self.data('loop')) ? true : false;
			var c_dots = ($self.data('dots')) ? true : false;
			var c_navs = ($self.data('navs')) ? true : false;
			var c_ctr = ($self.data('center')) ? true : false;
			var c_mgn = ($self.data('margin')) ? $self.data('margin') : 30;
			$self.addClass('owl-carousel').owlCarousel({
				navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				items: c_item, loop: c_loop, nav: c_navs, dots: c_dots, margin: c_mgn, center: c_ctr,
				autoplay: c_auto, autoplayTimeout: c_delay, autoplaySpeed: 300, rtl: c_rtl_c,
				responsive:{ 0:{ items:1 }, 480:{ items: c_item_m }, 768:{ items: c_item_t }, 1170:{ items: c_item } }
			});
		});
	}
	
	// Count Down
	var $count_token = $('.token-countdown');
	if ($count_token.length > 0 ) {
		$count_token.each(function() {
			var $self = $(this), datetime = $self.attr("data-date");
			$self.countdown(datetime).on('update.countdown', function(event) {
				$(this).html(event.strftime('' + '<div class="col"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">Days</span></div>' + '<div class="col"><span class="countdown-time">%H</span><span class="countdown-text">Hours</span></div>' + '<div class="col"><span class="countdown-time">%M</span><span class="countdown-text">Minutes</span></div>' + '<div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">Seconds</span></div>'));
			});
		});
		
	}
	
	//POPUP - Content
	var $content_popup = $('.content-popup');
	if ($content_popup.length > 0 ) {
		$content_popup.magnificPopup({
			type: 'inline',
			preloader: true,
			removalDelay: 400,
			mainClass: 'mfp-fade bg-team-exp'
		});
	}
	
	//POPUP - Video
	var $video_play = $('.video-play');
	if ($video_play.length > 0 ) {
		$video_play.magnificPopup({
			type: 'iframe',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false,
			callbacks: {
			beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});
	}
	
	//ImageBG
	var $imageBG = $('.imagebg');
	if ($imageBG.length > 0) {
		$imageBG.each(function(){
			var $this = $(this), 
				$that = $this.parent(),
				overlay = $this.data('overlay'),
				image = $this.children('img').attr('src');
			var olaytyp = (typeof overlay!=='undefined' && overlay!=='') ? overlay.split('-') : false;
			
			// If image found
			if (typeof image!=='undefined' && image !==''){
				if (!$that.hasClass('has-bg-image')) {
					$that.addClass('has-bg-image');
				}
				if ( olaytyp!=='' && (olaytyp[0]==='dark') ) {
					if (!$that.hasClass('light')) {
						$that.addClass('light');
					}
				}
				$this.css("background-image", 'url("'+ image +'")').addClass('bg-image-loaded');
			}
		});
	}
	// Mask Class add
	var $maskOV = $('[class*="mask-ov"]');
	if ($maskOV.length > 0) {
		$maskOV.each(function(){
			var $this = $(this), $that = $this.parent();
			if (!$that.hasClass('has-maskbg')) {
				$that.addClass('has-maskbg');
			}
		});
	}
	// Ajax Form Submission
	var contactForm = $('#contact-form'), subscribeForm = $('#subscribe-form');
	if (contactForm.length > 0 || subscribeForm.length > 0) {
		if( !$().validate || !$().ajaxSubmit ) {
			console.log('contactForm: jQuery Form or Form Validate not Defined.');
			return true;
		}
		// ContactForm
		if (contactForm.length > 0) {
			var selectRec = contactForm.find('select.required'), 
			qf_results = contactForm.find('.form-results');
			contactForm.validate({
			invalidHandler: function () { qf_results.slideUp(400); },
			submitHandler: function(form) {
				qf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: qf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm().find('.input-field').removeClass('input-focused'); }
					}
				});
				}
			});
			selectRec.on('change', function() { $(this).valid(); });
		}
		// SubscribeForm
		if (subscribeForm.length > 0) {
			var sf_results = subscribeForm.find('.subscribe-results');
			subscribeForm.validate({
			invalidHandler: function () { sf_results.slideUp(400); },
			submitHandler: function(form) {
				sf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: sf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm(); }
					}
				});
				}
			});
		}
	}
	
	// Input Animation
	var $inputline = $('.input-line');
	if ($inputline.length > 0) {
		$inputline.each(function(){
			var $this = $(this);
			var $thisval = $(this).val();
			if($thisval.length > 0) {
				$this.parent().addClass('input-focused');
			}
			$this.on('focus', function(){
				$this.parent().addClass('input-focused');
			});
			$this.on('blur', function(){
				$this.parent().removeClass('input-focused');
				var $afterblur = $(this).val();		
					if($afterblur.length > 0) {
					$this.parent().addClass('input-focused');
				}
			});
			
		});
	}
	
	// On Scroll Animation
	var $aniKey = $('.animated');
	if($().waypoint && $aniKey.length > 0){
		$win.on('load', function() {
			$aniKey.each(function(){
			var aniWay = $(this), typ = aniWay.data("animate"), dur = aniWay.data("duration"), dly = aniWay.data("delay");
			aniWay.waypoint(function(){
				aniWay.addClass("animated "+typ).css("visibility", "visible");
				if(dur){ 
					aniWay.css('animation-duration', dur+'s'); 
				}
				if(dly){ 
					aniWay.css('animation-delay', dly+'s'); 
				}
				}, { offset: '93%' });
			});
		});
	}
	
	// Preloader
	var $preload = $('#preloader'), $loader = $('#loader');
	if ($preload.length > 0) {
		$win.on('load', function() {
			$loader.fadeOut(300);
			$body_m.addClass("loaded");
			$preload.delay(700).fadeOut(300);
		});
	}
	
	/* @v1.2.0 */
	//Process Slider
	var slider_p = '.slider-pane', slider_n = '.slider-nav';
	if ($(slider_p).length > 0 ) {
		var c_rtl_s = ($body_m.hasClass('is-rtl')) ? true : false;
		$(slider_p).addClass('owl-carousel').owlCarousel({
		 	items:1,
			nav:false,
			dotsContainer:slider_n,
			margin:30,
			loop:true,
			autoplayTimeout:3000,
			rtl: c_rtl_s,
			autoplay:true,
			animateOut:'fadeOut',
			autoplayHoverPause:true
		});
	}
	
	// particlesJS
	var $particles_js = $('#particles-js');
	if ($particles_js.length > 0 ) {
		particlesJS('particles-js',
		// Update your personal code.
        {
		"particles": {
			"number": {
				"value": 50,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#00c0fa"
			},
			"shape": {
				"type": "circle",
				"opacity": 0.20,
				"stroke": {
					"width": 0,
					"color": "#2b56f5"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.30,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.12,
					"sync": false
				}
			},
			"size": {
				"value": 6,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.08,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#2b56f5",
				"opacity": 0.50,
				"width": 1.3
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
				"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
			"retina_detect": true
		}
		// Stop here.
      );
	}
	
	
	// Color Switcher ( only for demo )
	var _rimg = 'images/', _rmode = 'RTL Mode', _rurl = './rtl/index.html';
	if ($body_m.hasClass('is-rtl')) { _rimg = '../images/'; _rmode = 'LTR Mode'; _rurl = '../index.html'; }
	$body_m.append('<div class="demo-panel"><div class="demo-list"> <a class="demo-themes" title="See All Demo" href="javascript:void(0)"> <img src="'+_rimg+'demo-icon.png" /> </a> <a class="demo-mode" href="'+_rurl+'">'+_rmode+'</a> <a class="demo-cart" target="_blank" href="http://bit.ly/2uPFhHX"> <i class="fa fa-shopping-cart"> </i> </a> <a class="demo-wp" target="_blank" href="http://bit.ly/2JnGx8h"> <i class="fa fa-wordpress"> </i> <span>WP</span> </a> <a class="demo-toggle" href="javascript:void(0)"> <i class="fa fa-gear"> </i> </a></div><div class="demo-content"><ul class="color-list"><li> <a href="#" class="color-trigger theme-defalt" title="theme"></a></li><li> <a href="#" class="color-trigger theme-blue" title="theme-blue"></a></li><li> <a href="#" class="color-trigger theme-mint" title="theme-mint"></a></li><li> <a href="#" class="color-trigger theme-orange" title="theme-orange"></a></li><li> <a href="#" class="color-trigger theme-royal" title="theme-royal"></a></li><li> <a href="#" class="color-trigger theme-ruby" title="theme-ruby"></a></li><li> <a href="#" class="color-trigger theme-java" title="theme-java"></a></li></ul></div></div><div class="demo-theme-content"><div class="demo-theme-content-bg"></div> <a class="demo-close" href="javascript:void(0)">&times;</a><div class="demo-theme-all d-flex align-items-center"><div><div class="demo-offer-image text-center"><a class="demo-offer-link" target="_blank" href="http://bit.ly/2uPFhHX"><img src="http://cdn.themenio.com/offers/ico-deal-flash-sm.gif" alt="offer" /></a></div><div class="row"><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-1"><div class="demo-image"> <a href="index-lavender-particle-animate.html"> <img src="'+_rimg+'demo-lavender.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-lavender-particle-animate.html"> <span>Lavender Light</span><h5>Landing V1 <span class="demo-new-badge demo-hot-badge">v1.2 New</span></h5> </a><ul class="demo-item-list"><li> <a href="index-lavender.html">Default</a></li><li> <a href="index-lavender-animate.html">Animated</a></li><li> <a href="index-lavender-particle.html">Particle</a></li><li> <a href="index-lavender-particle-animate.html">Particle - Ani</a></li><li> <a href="#">Blog Archive <small class="demo-soon">Soon</small> </a></li><li> <a href="#">Blog Single <small class="demo-soon">Soon</small> </a></li><li> <a href="#">Token Sales <small class="demo-soon">Soon</small> </a></li></ul></div></div></div><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-2"><div class="demo-image"> <a href="index-azure-light-pro-tokensales.html"> <img src="'+_rimg+'demo-azure-pro.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-azure-light-pro-tokensales.html"> <span>Azure Light Pro</span><h5>Landing V2 <span class="demo-new-badge">v1.1</span></h5> </a><ul class="demo-item-list"><li> <a href="index-azure-light-pro.html">Default</a></li><li> <a href="index-azure-light-pro-animate.html">Animated</a></li><li> <a href="index-azure-light-pro-particle.html">Particle</a></li><li> <a href="index-azure-light-pro-particle-animate.html">Particle - Ani</a></li><li> <a href="blog-archive-azure-light-pro.html">Blog Archive</a></li><li> <a href="blog-single-azure-light-pro.html">Blog Single</a></li><li> <a href="index-azure-light-pro-tokensales.html">Token Sales</a></li></ul></div></div></div><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-3"><div class="demo-image"> <a href="index-azure-particle-animate.html"> <img src="'+_rimg+'demo-azure.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-azure-particle-animate.html"> <span>Default Azure</span><h5>Landing V3 <span class="demo-new-badge">v1.1</span></h5> </a><ul class="demo-item-list"><li> <a href="index-azure.html">Default</a></li><li> <a href="index-azure-animate.html">Animated</a></li><li> <a href="index-azure-particle.html">Particle</a></li><li> <a href="index-azure-particle-animate.html">Particle - Ani</a></li><li> <a href="blog-archive-azure.html">Blog Archive</a></li><li> <a href="blog-single-azure.html">Blog Single</a></li><li> <a href="index-azure-tokensales.html">Token Sales</a></li></ul></div></div></div><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-4"><div class="demo-image"> <a href="index-dark-pro-particle-animate.html"> <img src="'+_rimg+'demo-dark-pro.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-dark-pro-particle-animate.html"> <span>Default Dark Pro</span><h5>Landing V4 <span class="demo-new-badge">v1.1</span></h5> </a><ul class="demo-item-list"><li> <a href="index-dark-pro.html">Default</a></li><li> <a href="index-dark-pro-animate.html">Animated</a></li><li> <a href="index-dark-pro-particle.html">Particle</a></li><li> <a href="index-dark-pro-particle-animate.html">Particle - Ani</a></li><li> <a href="blog-archive-dark-pro.html">Blog Archive</a></li><li> <a href="blog-single-dark-pro.html">Blog Single </a></li><li> <a href="index-dark-pro-tokensales.html">Token Sales</a></li></ul></div></div></div><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-5"><div class="demo-image"> <a href="index-light-tokensales.html"> <img src="'+_rimg+'demo-pro.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-light-tokensales.html"> <span>Default Light</span><h5>Landing V5 <span class="demo-new-badge">v1.0</span></h5> </a><ul class="demo-item-list"><li> <a href="index-light.html">Default</a></li><li> <a href="index-light-animate.html">Animated</a></li><li> <a href="index-light-particle.html">Particle</a></li><li> <a href="index-light-particle-animate.html">Particle - Ani</a></li><li> <a href="blog-archive-light.html">Blog Archive</a></li><li> <a href="blog-single-light.html">Blog Single</a></li><li> <a href="index-light-tokensales.html">Token Sales</a></li></ul></div></div></div><div class="col-lg-4"><div class="demo-theme-item demo-theme-item-6"><div class="demo-image"> <a href="index-dark-particle-animate.html"> <img src="'+_rimg+'demo-dark.jpg" alt="alt"> </a></div><div class="demo-text"> <a class="demo-title" href="index-dark-particle-animate.html"> <span>Default Dark</span><h5>Landing V6 <span class="demo-new-badge">v1.0</span></h5> </a><ul class="demo-item-list"><li> <a href="index-dark.html">Default</a></li><li> <a href="index-dark-animate.html">Animated</a></li><li> <a href="index-dark-particle.html">Particle</a></li><li> <a href="index-dark-particle-animate.html">Particle - Ani</a></li><li> <a href="blog-archive-dark.html">Blog Archive</a></li><li> <a href="blog-single-dark.html">Blog Single</a></li><li> <a href="index-dark-tokensales.html">Token Sales</a></li></ul></div></div></div></div></div></div></div>');
	
	$('.demo-themes,.demo-close').on("click", function() {
		$('.demo-theme-content').toggleClass('active');
		$('html').toggleClass('demo-on');
	});
	
	$('.demo-toggle').on("click", function() {
		$('.demo-content').slideToggle('slow');
	});
	
	var $color_trigger = $('.color-trigger');
	if ($color_trigger.length > 0 ) {
		$color_trigger.on("click",function() {
			var $self = $(this);
			var $color_value = $self.attr("title");
			$("#layoutstyle").attr("href", "../assets/css/" + $color_value + ".css");
			return false;
		});
	}
	// End Demo
	
})(jQuery);