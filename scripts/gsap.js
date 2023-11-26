var tl = gsap.timeline();

tl.to(".bg_inner_item", { stagger: 0.05, x: 2700, duration: 1 })
  .from(".circle_text", { opacity: 0, duration: 0.5 })
  .from(".header", { y: -100, duration: 1 });
