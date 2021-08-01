 /* Toggle Hamburger - X */
$(document).ready(function(){
	$('.icon').click(function () {
		$('.icon').toggleClass('open-hamburger');
	})
});

/* Toggle Navigation-bar */
$(document).ready(function(){
	$('.icon').click(function () {
		$('nav').toggleClass('open-nav');
	})
});

/* carousel replacement  */
let $gridPicture = $('.portofolio');
	
$(document).ready(function(){
	$gridPicture.click(function () {
		var idList = [];
		idList.push($(this).attr('id'));
		
			var $x = $('#'+idList[0])
			
		
		$x.toggleClass('highlight');
	})
});

document.getElementsByClassName("on-short")[0].style.height = window.innerHeight + 'px';

    //configuration
	let width = 700,
		animationSpeed = 1000,
		pause = 4000,
		currentSlide = 2;
		
		
	//catche DOM
	let $slider = $('#slider'),
		$slideContainer = $slider.find('.slider-container'),
		$slides = $slideContainer.find('.slides');
	
	var interval;
	
	//Start Slider Function
	function startSlider(){	
		
		interval = setInterval( function() {
			
			$slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function () {
				
				if ( ++currentSlide === $slides.length ) {
					
					currentSlide = 2;
					$slideContainer.css('margin-left', '-' + 700 + 'px');
				}
			}); 
		}, pause);
		
	}
	//Stop slider
	function stopSlider() {
			clearInterval(interval);
		}
	
	//When mouse is over carousel, make it stop/make it restart when it leaves
	
 	$slider.on('mouseover', stopSlider)
		   .on('mouseleave', startSlider); 

	startSlider();
	
	
	//Left and Right Buttons
			let $btnLeft = $('.btn-left'),
				$btnRight = $('.btn-right');

				/* The addEventListener and inline onclick are not working well togheder */
/* 		$btnRight.on('click', clearInterval(), forward);
		$btnLeft.on('click', clearInterval(), backward); */
		
		function forward () {
				
				$('.btn-right').prop('disabled', true);
									
				setTimeout(function(){
				$('.btn-right').prop('disabled', false);
					}, 2000);
							
				$slideContainer.animate({'margin-left': '-=' +width}, animationSpeed, function () {				
				currentSlide++;

						if ( currentSlide === $slides.length ) { 
						currentSlide = 1;
						$slideContainer.css('margin-left', '-' + 700 + 'px');
				
						}
					});
				}
				
 		function backward () {
				
				$('.btn-left').prop('disabled', true);
									
				setTimeout(function(){
				$('.btn-left').prop('disabled', false);
					}, 2000);
							
	
				$slideContainer.animate({'margin-left': '+=' +width}, animationSpeed, function () {				
				currentSlide--;
								slideTrack=0;
						if ((currentSlide === 1)&&(slideTrack === 0)) { 
						currentSlide = 10;
						$slideContainer.css('margin-left', '-' + 6300 + 'px');
								
							}	
					});
				}

		
		
			
/* When hover over images inside 'osm-images' class */
$('.specs-top').mouseenter(function () {
	let $topDiv = $('.header-hover-top');
		$topDiv.addClass('header-hover-activate').mouseleave(function () { 
		$topDiv.removeClass('header-hover-activate')});
	})
$('.specs-middle').mouseenter(function () {
	let $middleDiv = $('.header-hover-middle');
		$middleDiv.addClass('header-hover-activate').mouseleave(function () { 
		$middleDiv.removeClass('header-hover-activate')});
	}) 
$('.specs-bottom').mouseenter(function () {
	let $bottomDiv = $('.header-hover-bottom');
		$bottomDiv.addClass('header-hover-activate').mouseleave(function () { 
		$bottomDiv.removeClass('header-hover-activate')});
	}) 	

/* When hover over the third section 'rooms' */
 $('.rooms').mouseenter(function () { $('.cover').addClass('openCover')});
 
/*    document.getElementsByClassName('food-content')[0].addEventListener('click', (function(){console.log('asd')})); */
	

	// Function to change the content of t2



// $('.header-hover').hover.animate({top: 0;}, function() {
	
// })


	

	
	
	
	
	







