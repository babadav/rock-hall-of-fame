console.log("script.js");

// $('.band-name').waypoint(function(){
// 		$('.band-name').addClass('hide');
// 	} , {
// 		offset: '-15%'
// 	});

setTimeout(function(){
		$('.band-drop-down').addClass('loaded');
	}, 1000);




new Waypoint({
  element: document.querySelector('.text-block-1'),
  offset: "100%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
    	// do animation
    	TweenMax.to(".band-drop-down", 2, {
			opacity: .6
		})
    }
  }
});

new Waypoint({
  element: document.querySelector('.text-block-2'),
  offset: "50%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
    	// do animation
    	TweenMax.to(".band-drop-down", 2, {
			opacity: .3
		})
    }
  }
});


TweenMax.to(".tb1-left-animation", 3, {

			left: "20%",
			top: "10%"
		});

TweenMax.to(".tb1-right-animation", 3, {
			right: "40%",
			top: "60%"
		});










