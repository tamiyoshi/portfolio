var tl = gsap.timeline();

tl.to(".bg_inner_item", 3, { stagger: 0.2, x: "100%" })
  .from(".circle_text", 1.5, { opacity: 0, duration: 0.5 }, "-=2.5")
  .from(".header", 1, { y: -100 }, "-=2");
