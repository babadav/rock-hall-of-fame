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

new Waypoint({
  element: document.querySelector('.text-block-1'),
  offset: "10%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb1-left-animation", 3, {
      left: "25%",
      top: "10%"
    });
      TweenMax.to(".tb1-right-animation", 3, {
      right: "10%",
      top: "60%"
    });
    }
  }
});

new Waypoint({
  element: document.querySelector('.text-block-2'),
  offset: "10%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb2-left-animation", 3, {
      left: "15%",
      top: "10%"
    });
      TweenMax.to(".tb2-right-animation", 3, {
      right: "1%",
      top: "100%"
    });
    }
  }
});


new Waypoint({
  element: document.querySelector('.text-block-4'),
  offset: "100%",
  handler: function(direction) {
    console.log('Scrolled to waypoint!', direction)
    if (direction == "down") {
      // do animation
      
      TweenMax.to(".tb4-left-animation", 3, {
      left: "15%",
      top: "10%"
    });
      TweenMax.to(".tb4-right-animation", 3, {
      right: "43%",
      top: "-20%"
    });
    }
  }
});



var yearContainer = document.querySelector('.year');

yearContainer.addEventListener('click' , function(){
  console.log('click');

  yearContainer.classList.add('year-active');

  if (yearContainer.classList = 'year-active') {
    yearContainer.classList.add('year');
    yearContainer.classList.remove('year-active');

  }
});











