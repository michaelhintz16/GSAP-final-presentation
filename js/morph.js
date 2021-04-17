var tlMorph = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: 0.3})

tlMorph 
.to('.image_one', 1, {morphSVG: {shape: '.image_two'}})

// $(window).on("load", function(){
// var tlWipe = new TimelineMax()
//   tlWipe
//   .to('svg', 1, {autoAlpha: 0})
//   .to('.wipe-bg', 1, {scaleY: 0, transformOrigin: "center top"})
//   });