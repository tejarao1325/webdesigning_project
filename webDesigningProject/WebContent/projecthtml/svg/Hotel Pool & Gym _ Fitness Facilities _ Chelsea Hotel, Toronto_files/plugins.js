
(function( $ ){
	var lastScrollTop = 0;

	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

$.fn.removeSpace = function(){ 
  $(this).contents().filter(function() {
    return this.nodeType === 3; 
  }).remove();
};




	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(event){
			var pos = $window.scrollTop();
			var st = $window.scrollTop();
			if (st > lastScrollTop){
				change = 'down';
			} else {
				change = 'up';
			}
			lastScrollTop = st;

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				var textOp = ((1 - (st/(top + height))));
				var currentOffset = $(this).css("background-position").split(" ");
				var currentY = parseInt(currentOffset[1], 10);
				
				if(change == 'up') {
					var newY = currentY - 1.3;
				} else {
					var newY = currentY + 1.3;
				}

				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				if(newY < 50 && newY > 50) {
					$this.css('backgroundPosition', xpos + " " + newY + "%");
				}
				$('.header-heading h1').css('opacity', textOp);
			});


		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

jQuery(document).ready(function($){
	var itemInfoWrapper = $('.cd-single-item');
	
	itemInfoWrapper.each(function(){
		var container = $(this),
			// create slider pagination
			sliderPagination = createSliderPagination(container);
		
		//update slider navigation visibility
		updateNavigation(container, container.find('.cd-slider li').eq(0));

		container.find('.cd-slider').on('click', function(event){
			//enlarge slider images 
			if( !container.hasClass('cd-slider-active') && $(event.target).is('.cd-slider')) {
				itemInfoWrapper.removeClass('cd-slider-active');
				container.addClass('cd-slider-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					$('body,html').animate({'scrollTop':container.offset().top - 110}, 200);
				});
			}
		});

		container.find('.cd-close').on('click', function(){
			//shrink slider images 
			container.removeClass('cd-slider-active');
		});

		//update visible slide
		container.find('.cd-next').on('click', function(){
			nextSlide(container, sliderPagination);
		});

		container.find('.cd-prev').on('click', function(){
			prevSlide(container, sliderPagination);
		});

		container.find('.cd-slider').on('swipeleft', function(){
			var wrapper = $(this),
				bool = enableSwipe(container);
			if(!wrapper.find('.selected').is(':last-child') && bool) {nextSlide(container, sliderPagination);}
		});

		container.find('.cd-slider').on('swiperight', function(){
			var wrapper = $(this),
				bool = enableSwipe(container);
			if(!wrapper.find('.selected').is(':first-child') && bool) {prevSlide(container, sliderPagination);}
		});

		sliderPagination.on('click', function(){
			var selectedDot = $(this);
			if(!selectedDot.hasClass('selected')) {
				var selectedPosition = selectedDot.index(),
					activePosition = container.find('.cd-slider .selected').index();
				if( activePosition < selectedPosition) {
					nextSlide(container, sliderPagination, selectedPosition);
				} else {
					prevSlide(container, sliderPagination, selectedPosition);
				}
			}
		});
	});	
		
	//keyboard slider navigation
	$(document).keyup(function(event){
		if(event.which=='37' && $('.cd-slider-active').length > 0 && !$('.cd-slider-active .cd-slider .selected').is(':first-child')) {
			prevSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
		} else if( event.which=='39' && $('.cd-slider-active').length && !$('.cd-slider-active .cd-slider .selected').is(':last-child')) {
			nextSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
		} else if(event.which=='27') {
			itemInfoWrapper.removeClass('cd-slider-active');
		}
	});

	function createSliderPagination($container){
		var wrapper = $('<ul class="cd-slider-pagination"></ul>').insertAfter($container.find('.cd-slider-navigation'));
		$container.find('.cd-slider li').each(function(index){
			var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
				dot = $('<a href="#0"></a>').appendTo(dotWrapper);
			dotWrapper.appendTo(wrapper);
			dot.text(index+1);
		});
		return wrapper.children('li');
	}

	function nextSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.cd-slider .selected'),
			navigationDot = $container.find('.cd-slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() + 1;
		visibleSlide.removeClass('selected');
		$container.find('.cd-slider li').eq($n).addClass('selected').prevAll().addClass('move-left');
		navigationDot.removeClass('selected')
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.cd-slider li').eq($n));
	}

	function prevSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.cd-slider .selected'),
			navigationDot = $container.find('.cd-slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() - 1;
		visibleSlide.removeClass('selected')
		$container.find('.cd-slider li').eq($n).addClass('selected').removeClass('move-left').nextAll().removeClass('move-left');
		navigationDot.removeClass('selected');
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.cd-slider li').eq($n));
	}

	function updateNavigation($container, $active) {
		$container.find('.cd-prev').toggleClass('inactive', $active.is(':first-child'));
		$container.find('.cd-next').toggleClass('inactive', $active.is(':last-child'));
	}

	function enableSwipe($container) {
		var mq = window.getComputedStyle(document.querySelector('.cd-slider'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		return ( mq=='mobile' || $container.hasClass('cd-slider-active'));
	}
});
