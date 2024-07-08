
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


// const footer = document.querySelector(".footer_scroll_home");
// const navegacion_home = document.querySelector(".navegacion_home");
// const header = document.querySelector(".header_scroll_home");

// if (footer && navegacion_home && header) {
//     ScrollTrigger.create({
//         trigger: footer,
//         start: "top 10%",
//         onEnter: () => {
//             navegacion_home.classList.remove("blur_menu");
//         },
//         onLeaveBack: () => {
//             navegacion_home.classList.add("blur_menu");
//         },
//     });

//     ScrollTrigger.create({
//         trigger: header,
//         start: "center -25%",
//         onEnter: () => {
//             navegacion_home.classList.add("blur_menu");
//         },
//         onLeaveBack: () => {
//             navegacion_home.classList.remove("blur_menu");
//         },
//     });

//     const sections = document.querySelectorAll<HTMLElement>(".section");
//     sections.forEach((section, index) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "+=150%",
//         pin: true,
//         pinSpacing: false
//       });
//     });
// }

import { gsap } from "gsap";
    
import { Observer } from "gsap/Observer";


gsap.registerPlugin(Observer);

let sections = document.querySelectorAll("section"),
  outerWrappers = gsap.utils.toArray(".outer"),
  innerWrappers = gsap.utils.toArray(".inner"),
  currentIndex = -1,
  wrap = gsap.utils.wrap(0, sections.length),
  animating;

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

function gotoSection(index, direction) {
  index = wrap(index); // make sure it's valid
  animating = true;
  let fromTop = direction === -1,
      dFactor = fromTop ? -1 : 1,
      tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });
  if (currentIndex >= 0) {
    // The first time this function runs, current is -1
    gsap.set(sections[currentIndex], { zIndex: 0 });
      tl.to(sections[currentIndex], { autoAlpha: 0 });
  }
  gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
  tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
      yPercent: i => i ? -100 * dFactor : 100 * dFactor
    }, { 
      yPercent: 0 
    }, 0)
  currentIndex = index;
}

Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
});

gotoSection(0, 1);