var tl = gsap.timeline();

tl.to(".bg_inner_item", { stagger: 0.2, x: 2600, duration: 1.8 })
  .from(".circle_text", { opacity: 0, duration: 0.5 })
  .from(".header", { y: -100, duration: 1 });
