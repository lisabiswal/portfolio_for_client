// animating the form section

let tl = gsap.timeline();

tl.from("form div", {
  y: -50,
  opacity: 0,
  duration: 1,
  stagger: 0.3
})
.from("form button", {
  y: -50,
  opacity: 0,
  duration: 1
}, "-=0.5"); 
