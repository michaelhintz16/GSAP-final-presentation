gsap.registerPlugin(ScrollTrigger);
 
gsap.utils.toArray('.section').forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    pin: true,
    pinSpacing: false
  });
});
const letters = document.querySelectorAll(".wrapper .letter");

let tl = gsap.timeline({
  defaults: { duration: 1, ease: "elastic.out(1, 0.3)" },
});

setInterval(() => {
  tl.to(letters, {
      scaleY: 2,
      stagger: 0.2,
    })
    .to(letters, {
      scaleY: 1,
      stagger: "-.2",
    });
}, 1000);
