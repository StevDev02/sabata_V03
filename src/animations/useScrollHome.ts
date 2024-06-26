
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const footer = document.querySelector(".footer_scroll_home");
const navegacion_home = document.querySelector(".navegacion_home");
const header = document.querySelector(".header_scroll_home");

if (footer && navegacion_home && header) {
    ScrollTrigger.create({
        trigger: footer,
        start: "top 10%",
        onEnter: () => {
            navegacion_home.classList.add("hidden");
        },
        onLeaveBack: () => {
            navegacion_home.classList.remove("hidden");
        },
    });

    ScrollTrigger.create({
        trigger: header,
        start: "center -25%",
        onEnter: () => {
            navegacion_home.classList.add("blur_menu");
        },
        onLeaveBack: () => {
            navegacion_home.classList.remove("blur_menu");
        },
    });

    const sections = document.querySelectorAll<HTMLElement>("section");
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false
      });
    });
}