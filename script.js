gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 1.5,
  ease: "power4.out",
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    ease: "power4.out",
    duration: 1.5,
  },
  "-=1.5"
);

tl.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    ease: "power4.out",
    duration: 1,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: "back.out(1.7)",
});

// Scroll basedd animations

gsap.from(".transition2", {
  scrollTrigger: {
    trigger: ".transition2",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from(".transition3", {
  scrollTrigger: {
    trigger: ".transition3",
    start: "top center",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});
