!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window,document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '1630445653680515');
	fbq('track', 'PageView');


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  return false;
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function checkForTracking() {

	var queryVars = window.location.search;
	if(queryVars.length > 0) {
		if(queryVars.indexOf('htl=cstor') > -1 && queryVars.indexOf('cid') > -1 && queryVars.indexOf('eng') > -1) {
			setCookie('campaign_vars', queryVars.substring(1));

		}	
	}

}

checkForTracking();

function setCookie(name,value) {

    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    var expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + value + expires + "; path=/";


}


function resizeBannerImages() {
	$('.sharp').each(function() {
		if(!$(this).hasClass('corrected')) {

			if($(window).width() > 768) {

				$(this).css({
					maxHeight: 'none',
					maxWidth : 'none'
				})
			} else {
				$(this).css({
					maxHeight: '600px',
					maxWidth : 'none'
				})
			}
			$(this).addClass('corrected')
		}
	})
}

$(function() {
	// LIVE

	appendTracking = function(addOrNew) {

		if(getCookie('campaign_vars')) {
			if(addOrNew == 'add') {
				return '&' + getCookie('campaign_vars');			
			} else {
				return '?' + getCookie('campaign_vars');			

			}
		}
		return '';

	}

	$('a[href*="synxis"]').each(function() {
		$(this).attr('href', $(this).attr('href') + appendTracking('add'));
	})

	$('.antimoderate').each(function() {
		var image = this;
		AntiModerate.process(image, image.getAttribute("data-antimoderate-idata"), image.getAttribute("data-antimoderate-scale"));

		//load the original image
		var origImageSrc = image.getAttribute("data-original-img");
		var downloadingImage = new Image();  

		downloadingImage.onload = function(){
			image.src = this.src;
		};
		downloadingImage.src = origImageSrc; 
	});

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
	 	}, scroll_top_duration
		);
	});


	var carouselCounter = {};
	var bookingStartFired = false;
	var allowHighlights = false;
	var allowEventTracking = false;
	$('footer .information h6').click(function() {
		if($(window).width() < 768) {
			$(this).siblings('div, a').slideToggle();
		}
	})

	function sizeMask() {
		$('.mask').css('height', $('header').height() + $('section').height() + $('footer').height());
	}

	setTimeout(function() {
		sizeMask();
	}, 3000);

	setTimeout(function() {
		allowEventTracking = true;
	}, 1000);

	$('.booking-vertical *:not(input[type="submit"]), .booking-horizontal *:not(input[type="submit"])').one('click', function() {
		if(!bookingStartFired) {
			var type = $(this).hasClass('booking-horizontal') ? 'Horizontal' : 'Vertical';
			// omnitureLbox._track_booking_interest(type);
			bookingStartFired = true;
		}
	})


  //Customize colorbox dimensions
  var colorboxResize = function(resize) {
    var width = "90%";
    var height = (($(window).width() * 0.9) * 9)/16;
    $.colorbox.settings.width = width;
    $.colorbox.settings.height = (height + 30) + 'px';
    
    //if window is resized while lightbox open
    if(resize) {
      $.colorbox.resize({
        'width': width,
        'height': height + 'px',
      });
    } 
  }
  $.colorbox.settings.onLoad = function() {
    // colorboxResize();
  }
   
	
  //In case of window being resized
  $(window).resize(function() {
  	resizeBannerImages();
    // colorboxResize(true);
    sizeMask();
  });

	$('a.download').click(function(e) {
		e.preventDefault();
		window.open($(this).attr('href'), '_blank');
	})

	if($('.quick-info-box').length) {
		var allWidths = [];
		$('.quick-info-box li').each(function() {
			allWidths.push($(this).outerWidth());
		})				
		var widest = Math.max.apply(null, allWidths);
		$('.quick-info-box li').css({
			'width' : widest + 15, 
			'display': 'block'
		})
	}

	$('.map a, .mobile-map a').click(function(e) {

		if($('body').hasClass('mobile-device')) {

			e.preventDefault();
			window.location.href = "https://www.google.com/maps/place/Chelsea+Hotel,+Toronto/@43.658698,-79.382982,17z/data=!3m1!4b1!4m2!3m1!1s0x882b34b57f88aad5:0xa9bf8d18c55906a9";

		} else {

			return true;

		}

	})

	$('.1896-club').mouseover(function() {

		$(this).find('img:eq(0)').hide();  	
		$(this).find('img:eq(1)').show();  	

  	}).mouseout(function() {

 		$(this).find('img:eq(0)').show();  	
		$(this).find('img:eq(1)').hide();  	   	

   	});

    var trigger = $('.hamburger'),
    	parentTrigger = $('.menu-button'),
        isClosed = false,
        selectingDate = 'in',
       	scrollThreshold;

       	renderSVGs = function() {
	        jQuery('img.svg').each(function(){
	            var $img = jQuery(this);
	            var imgID = $img.attr('id');
	            var imgClass = $img.attr('class');
	            var imgURL = $img.attr('src');
	            jQuery.get(imgURL, function(data) {
	                var $svg = jQuery(data).find('svg');
	                if(typeof imgID !== 'undefined') {
	                    $svg = $svg.attr('id', imgID);
	                }
	                if(typeof imgClass !== 'undefined') {
	                    $svg = $svg.attr('class', imgClass+' replaced-svg');
	                }
	                $svg = $svg.removeAttr('xmlns:a');

	                $img.replaceWith($svg);

	            }, 'xml');

	        });

       	}

		$('.terms-conditions').click(function() {
			resizeDoubleContainer($(this));
			return false;
		})

		function resizeDoubleContainer(el) {
			var toExpand = $(el).siblings('div');
			var adjustment = toExpand.height();
			var imageContainer = $(el).parent().parent();
			var that = $(el);
 			if($(el).hasClass('but-with-image')) {
 				if(!$(el).hasClass('opened')) {
 					imageContainer.css({
 						'min-height': imageContainer.height() + adjustment 
 					});
 					toExpand.slideDown();
 					$(el).addClass('opened')
 				} else {
 					toExpand.slideUp(function() {
 						imageContainer.css({
 							'min-height': imageContainer.height() - adjustment 
 						});
 						that.removeClass('opened')

 					});

 				}
 			} else {
 				toExpand.slideToggle();
 			}

		}

		if($('select').length) {
			setTimeout(function() {

				$('select').each(function() {
					$(this).select2({
						minimumResultsForSearch: Infinity,
						dropdownAutoWidth : true,
					}).on('change', function() {
						$(this).prev().val($(this).select2("val"))
					}).trigger('change');
				});
			}, 500)
			
		}

		$(".flexnav").flexNav();


		isBelowFold = function() {
			wS = $(window).scrollTop();
			if($(window).width() > 768) {
				if(wS > 120) {
					$('body').addClass('horizontal-booking');
				} else {
					$('body').removeClass('horizontal-booking');
				}
			} else {
				if(wS > 85) {
					$('body').addClass('mobile-fixed');
				} else {
					$('body').removeClass('mobile-fixed');
				}				
			}
		}

		$(window).scroll(function() {
			isBelowFold();
		});

		$('body').on('click', '.select-date', function() {
			selectingDate = $(this).attr('data-day');
		})

	    $( ".booking-horizontal .booking-dates input" ).datepicker({
			showAnim : 'slideDown',
			minDate : 0,
			onSelect: function(dateText, inst) { 

				var dateAsString = dateText;
				var dateAsObject = $(this).datepicker( 'getDate' );
				$('.booking-horizontal .select-date[data-day="' + selectingDate + '"]').attr('value', dateAsString);
				if(selectingDate === 'in') {

				    var date = $(this).datepicker('getDate');

					var myDate = new Date(date);

					var myEpoch = parseInt(myDate.getTime()) + (1000*60*60*24*2);

					var OMGkillme = new Date(myEpoch);
					formattedDate = getRealDate(OMGkillme);

					$('.booking-horizontal .select-date[data-day="out"]').attr('value', formattedDate);
					selectingDate = 'out';
				} else {
					selectingDate = 'in';
				}
			}

	    });

	    function getRealDate(firtyDate) {

	    	if(firtyDate.getMonth() < 9){
			    monthString = '0'+ parseInt(firtyDate.getMonth() + 1);
			} else {
			    monthString = parseInt(firtyDate.getMonth() + 1);
			}

			var year = monthString + '/' + firtyDate.getDate() + '/' + firtyDate.getFullYear();
			return year;
	    }

	    $( ".booking-vertical .options .calendar .check-in-inline" ).datepicker({
				inline : true,
				minDate : 0,
				onSelect: function(dateText, inst) { 

					var dateAsString = dateText;
					var dateAsObject = $(this).datepicker( 'getDate' );
					$('.select-date[data-day="' + selectingDate + '"]').attr('value', dateAsString);

					if(selectingDate === 'in') {

						$('.check-in-inline').fadeOut('fast').fadeIn('slow')
						$('.calendar > div:first-of-type span').text('check out').animate({
								color : 'red',
						}, 250, function() {
							$(this).animate({
								color: '#E34E40'
							}, 200)
						});
						selectingDate = 'out';

					    var date = $(this).datepicker('getDate');
					    date.setTime(date.getTime() + (1000*60*60*24*2))
					    $(this).datepicker("setDate", date);
					    var that  = $(this);
						setTimeout(function() {
							var dateTime = new Date(that.datepicker("getDate"));
							var formattedDate = getRealDate(dateTime);

							var strDateTime =  dateTime.getDate() + "/" + (dateTime.getMonth()+1) + "/" + dateTime.getFullYear();

							$('.select-date[data-day="out"]').attr('value', formattedDate);

						}, 200)

					} else {

						$('.calendar > div:first-of-type span').text('check in').animate({
								color : 'red',
						}, 250, function() {
							$(this).animate({
								color: '#E34E40'
							}, 200)
						});
						selectingDate = 'in';


						$('.booking-vertical').removeClass('calendar-open');
					}
				}


	    });

	    $('body').on('click','.ui-datepicker-calendar td a', function() {

	    })


	    $('.booking-vertical .booking-dates input').click(function() {
	    	if(!$('.booking-vertical').hasClass('calendar-open')) {

		    	$('.booking-vertical').addClass('calendar-open');
	    	}

	    })

	    $('.close-calendar').click(function() {
	    	$('.booking-vertical').removeClass('calendar-open');
	    })

		$(".item-with-ul > *").on('touchend', function() {
			$(this).focus();
		})
		resetMenu = function() {
			var winWid = $(window).width();
			if(winWid > 767) {
				$('.menu .open').removeClass('open').hide();
			} 
			var maxWidth = $('.menu').width()
			var itemsWidth = 0;	

			$('.item-with-ul').each(function() {
				itemsWidth += $(this).find('a').width();
				switch ($(this).index()) {
					case 0:
						$('ul', $(this)).css('left' , 0);
					break;
					case 7:
						$('ul', $(this)).css('right' , 0);
					break;

					default:
						var starting = (170 - $(this).outerWidth())/2;
						$('ul', $(this)).css('left' , -starting);
	
				}

			})

			var excess = (Math.abs( maxWidth - itemsWidth ) / 16) - 1;
			if(winWid > 1400) {
				 excess = 40; 
			}
			if(excess > 0) {
				$('.item-with-ul').css({
					'padding-left' : excess + 'px', 
					'padding-right' : excess + 'px', 
				})
			}

		}

		resetFooter = function() {
			if($(window).width() > 768) {
				$('.information .four > div').show();
			}
		}

		formValidate = function(formish) {

			var valid = true;
			var arrive = $(formish).find('input[name="arrive"]').val();
			var depart = $(formish).find('input[name="depart"]').val();
			var adult = $(formish).find('input[name="adult"]').val();
			var children = $(formish).find('input[name="Child"]').val();


			if(!arrive || !depart) {
				valid = false;
			}

			var windowLink = valid == true ? 'https://gc.synxis.com/rez.aspx?Hotel=59052&Chain=10316&start=availresults&' + formish.serialize() + appendTracking('add') : 'https://gc.synxis.com/rez.aspx?Hotel=59052&Chain=10316' + appendTracking('add');


			window.open(windowLink);
		}

		$('input[type="submit"]:not(.natural)').click(function(e) {
			e.preventDefault();
			var formish = $(this).closest('form');
			formValidate(formish);
		})
		$('.booking-dates > span').click(function() {
			$(this).siblings('input').click();
		})

		$('body').on('click', '.item-with-ul', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).siblings().removeClass('set');
			$(this).siblings().each(function() {
				$(this).find('ul').hide();
			})
			$(this).addClass('set')
		})


		if($('.gridly').length) {
			var allHeights = [];
			$('.gridly .slide .details h6').each(function() {
				allHeights.push($(this).height());
			})				
			var highest = Math.max.apply(null, allHeights);
			$('.gridly .slide .details h6').css('height', highest + 'px');	
		}

		$(".inline").colorbox({
			inline:true, 
			width:"90%",
			maxWidth: '800px',
			onOpen : function() {
				$('body').addClass('cbox-open');
			},
			onClosed : function() {
				$('body').removeClass('cbox-open');
			}
		});

		$(".youtube").colorbox({
			iframe:true, 
		});

		$('.item-slider').on('init', function(event, slick, currentSlide, nextSlide){
			var allHeights = [];
				$('.item-slider .slide .details h6').each(function() {
					allHeights.push($(this).height());
				})				
				var highest = Math.max.apply(null, allHeights);
				$('.item-slider .slide .details h6').css('height', highest + 'px');	
				$('.item-slider').css({
					'opacity' : 1
				});

				for (var i =  slick.slideCount - 1; i >= 0; i--) {
					carouselCounter[i] = false;
				};
		});


		$('.item-slider').on('afterChange', function(event, slick, currentSlide){
			// @TODO Revisit
			if(allowEventTracking) {

				if(!carouselCounter[currentSlide]) {
					carouselCounter[currentSlide] = true;
				}
			}

		})

		$('.item-slider').slick({
			infinite: true,
			slidesToShow: 3,
			arrows: true,
			slidesToScroll: 1,
		  	responsive: [
			    {
			      breakpoint: 1225,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 850,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false,
			        dots: true
			      }
			    }
		  	]
		});

		setGrid = function() {
			$('.home-grid').height($('.home-grid').width());			
		}

		globalCorrections = function() {

			if($('.but-with-image').length) {

					$('.cd-single-item').each(function() {
						if($(window).width() > 1013) {
							$(this).css('min-height', $(this).find('.cd-item-info').outerHeight(true));

						} else {
							$(this).css({
								'min-height' : 'auto',
								'height' : 'auto',

							});
						}
					})
			
			}

			if($(window).width() < 1310) {
				$('.booking-horizontal').find('input[type="submit"]').val('SEARCH');
			} else {
				$('.booking-horizontal').find('input[type="submit"]').val('SEARCH FOR ROOMS');
			}
			if($('#tabs').length) {
					$('.tabs-container').on('init', function(event, slick) {
						$('#tabs .slick-prev').hide();
					})

					$('.tabs-container').slick({
						dots: true,
						infinite: false,
						arrows: true,
						speed: 300,
				        slidesToShow: 1,
				        slidesToScroll: 1
					});

					$('.tabs-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){

						if(nextSlide === 0) {
							$('#tabs .slick-prev').hide();
						} else if(nextSlide >= slick.slideCount - 1) {
							$('#tabs .slick-next').hide();
						}
						else {
							$('#tabs .slick-next, #tabs .slick-prev').show();
						}
						var containerHeight = $('.tabs-container').height();
						var newHeight = $('.tabs-container').find('.slick-slide[data-slick-index="' + nextSlide + '"]').height();
						$('#tabs ul.slick-dots').css({
							'position'	: 'absolute',
							'bottom'	: containerHeight - newHeight - 90
						})
						$('#tabs').css({
							'height'	:  newHeight + 90
						})

					});




					$('#tabs').parent().css('margin-bottom', 0);
			}

			if($('.quick-info-box').length) {
				if($('.reserve').length) {
					$('.quick-info-box').css('top', '-' + $('.reserve').outerHeight() + 'px');
				} else {
					$('.quick-info-box').css('top', '0px');
				}
			} 

			if($(window).width() > 1400) {
				var newVal = $('.header .fluid-max').offset();
				newVal = parseInt(newVal.left);


				$('.booking-horizontal').css('margin-left', '-' + newVal + 'px');	
				$('.header-overlay').css('left', newVal);

				if($('body').hasClass('horizontal-booking')) {
				}			
			} else {
				$('.booking-horizontal').css('margin-left', '0');
				$('.header-overlay').css('left', 0);
			}

		}

		$(window).resize(function() {
			setGrid();
			resetMenu();
			resetFooter();
			globalCorrections();
			$(window).scroll();
			if($(window).width() > 768) {
				$('body').removeClass('mobile-fixed');
			}
			$.colorbox.resize()
		})
		setGrid();
		resetMenu();
		resetMenu();
		globalCorrections();
		isBelowFold();
		renderSVGs();



    parentTrigger.click(function (e) {
      burgerTime($(this));
    });
    parentTrigger.on('touchend', function (e) {
       //burgerTime($(this));
    });

    function burgerTime(e) {
        // $('.hamburger').addClass('is-closed');

      if (isClosed == true) {
        $('.hamburger').removeClass('is-open');
        $('.hamburger').addClass('is-closed');
        isClosed = false;

      } else {
        $('.hamburger').removeClass('is-closed');
        $('.hamburger').addClass('is-open');
        isClosed = true;
      }

    }
$('.gridly').removeSpace();
    $('.item-with-ul a').click(function(e){
    		var link = e.target;
            if (e.target.target == '_blank') {
                window.open($(this).attr('href'));    
            } else {
   				window.location.href = ($(this).attr('href')) 
            }

    })

    $('.touch-button').click(function() {
    	$(this).parent().toggleClass('set')
    })

})


$('.t-bar .reserve').click(function(e) {
	e.preventDefault();
	$('html,body').animate({
        scrollTop: $('iframe').offset().top - 150},
        'slow');
})

function loadImages() {
	$('.cover.blurred').each(function() {
		var that = this;
		var fullImgSrc = $(this).attr('data-sharp');
		var fullImg = new Image();
		fullImg.style.maxHeight = $(that).css('height');
		fullImg.style.maxWidth = $(that).css('width');

		fullImg.onload = function() {
			this.setAttribute("class", "cover sharp");
			that.parentNode.insertBefore(this, that.nextSibling);
			that.className = that.className + " sharp-loaded";
			this.setAttribute('alt', that.getAttribute('data-sharp-alt'));
			$(that).remove();
		}

		fullImg.src = fullImgSrc;
	})
	var correctBanners = setInterval(function() {
		if($('.sharp:not(.corrected)').length > 0) {
			resizeBannerImages();
		} else {
			clearInterval(correctBanners);
		}
	}, 100)

}


window.onload=function(){
	var bannerCounter = {};

	var sliderAuto = false;
	$('.images').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	  loadImages()
	});



	$('.images').on('init', function(event, slick, currentSlide, nextSlide){
		loadImages();
		$('.slick-slide').parallax("50%", 1, true);
		var correctAuto = setInterval(function() {
			if(typeof slider != 'undefined') {
				if(!sliderAuto) {
					 slider.slick('slickSetOption', "autoplay", true,true);
					 sliderAuto = true;
					 clearInterval(correctAuto)
				}
			}
		}, 1000)

		if($('body').hasClass('home-page')) {
			$('.header-heading').fadeIn('slow');
		}
		for (var i = slick.slideCount - 1; i >= 0; i--) {
			bannerCounter[i] = false;
		};
	});


	
	$('body').on('click', '.images button, .slick-dots button', function() {
		currentSlide = $('.images .slick-active').index();
		if(bannerCounter[currentSlide] === false) {
			bannerCounter[currentSlide] = true;
		}
	})
		
	$('body').on('touchend', '.images', function() {
		currentSlide = $('.images .slick-active').index();
		if(bannerCounter[currentSlide] === false) {
			bannerCounter[currentSlide] = true;
		}
	})

	var slider = $('.images').slick({
		arrows: true, 
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover : false
	});
	
	$('.booking-vertical .options').click(function(){
		slider.slick('slickSetOption', "autoplay",false,false);
	})

	$('.externals a').click(function() {
		
		var linkType = $(this).parent().attr('data-category');

		switch (linkType) {
			case 'Mobile Apps':
				var details = $(this).hasClass('footer-apple') ? 'Apple' : 'Android';
			break;

			case "Social Properties":
				var details = $(this).attr('data-type');
			break;

			case "Club":
				var details = '1865';
			break;
		}

	})

	function SignupValidate(e, formish){
		var flag="true";
		var str="";
		if($(formish).find('[name="First_Name"]').val()==""){
			flag="false";str+="firstName "; }
		if($(formish).find('[name="Last_Name"]').val()==""){
			flag="false";str+="lastName "; }
		
		if($(formish).find('[name="Gender"]').val()=="") {

			flag="false";str+="gender "; }
			
		if($(formish).find('[name="email"]').val()==""){
			flag="false";str+="email "; }
		if($(formish).find('[name="Country"]').val()=="") {
			flag="false";str+="country "; }
			
		if($(formish).find('[name="list"]').checked==0) {
			flag="false";str+="list "; }
					
		if(flag=="false"){
		 	alert("Please fill in all required fields.");
			return false;
		}
	 	var emailStr=$(formish).find('[name="email"]').val(); 
		var emailPat=/^(.+)@(.+)$/; 
		var matchArray=emailStr.match(emailPat); 
		if (matchArray==null) 
		{ 
			alert("Please review email's format!") 
			return false;
		}
	   	if (flag=="true")
		{
	 		formish.submit();
		}
		else{
			alert("Please fill in all required fields.") ;
			return false;
		}	

	}

	$('.reader.skip').click(function() {
		$('html,body').animate({
	        scrollTop: $('body > section').offset().top - 150},
	        'fast').focus();

	})

	$('#theForm-2 .cta-button, #theForm-3 .cta-button').click(function(e) {
		e.preventDefault();
		SignupValidate(e, $(this).closest('form'));
	}) 

	$('input[type="email"]').on('keyup keydown', function() {
		$('#theForm-3').find('input[name="email"]').val($(this).val())
	})


	$('body').on('click', '.premium-special-banner a.go-link', function(e) {
		if($(this).data('to').indexOf('#subscribe') > -1) {
			e.preventDefault();
			var campaign = getParameterByName('campaign', $(this).data('to'));
			openSubscribeBox(campaign);
		}
	});

	if (window.location.hash === '#subscribe') {
		var campaign = getParameterByName('campaign');

		openSubscribeBox(campaign);
	}

	function openSubscribeBox(campaign) {
		$.get('/en/subscribe/thing', function(data) {
			$.colorbox({
				html:data,
				maxWidth:'90%',
				maxHeight:'90%',
				// height:'90%',
				onOpen : function() {
					$('html,body').addClass('cbox-open');
				},
				onClosed : function() {
					$('html,body').removeClass('cbox-open');
				}
			})
		});

	}


	// if(getCookie('saw-notice') === false && (1510225200000 - d.getTime() > 0)) {
	// 	$.colorbox({html:"<div style=\"padding: 20px;\"><img src=\"http://origin-www.chelseatoronto.com/en/assets/img/chelsea-logo.png\" style=\"width: 175px; margin: 0px auto; display: block;\" /><p style=\"text-align:left; margin-top: 25px;\">Dear Valued Guest,<br>Please note we are conducting an upgrade to our telecommunication system which will result in our current phone system being offline from Wednesday, November 8th at 10pm to Thursday, November 9th at 6am.</p><p>During this time,</p><ul style=\"list-style: disc inside\"><li>All reservations can be made or modified online.</li><li>Should you require assistance please call 416-595-1975.</li><li>In the event of an emergency, please contact our Night Manager at 416-729-7027.</li></ul><p>We thank you for your patience and apologize for any inconvenience this may cause.</p><p>-Chelsea Hotel, Toronto</p></div>", height: "400px"});
		
	// 	// colorboxResize(true);
		
	// 	setCookie('saw-notice', 1);
	// }


	$('.booking-vertical input[type="submit"], .booking-horizontal input[type="submit"], .grids-section[data-page="Offers Grid"] .cta-button, .grids-section[data-page="Rooms Grid"] .cta-button, body.room .action .cta.btn, body.offer .action .cta.btn').click(function(e) {
		fbq('track', 'InitiateCheckout');
		return true;
	})


	$('.menu > .flexnav > .item-with-ul:nth-of-type(2) ul').append('<li><a href="/en/explore/family-vacation">Family Vacation in Toronto</a></li>');

};