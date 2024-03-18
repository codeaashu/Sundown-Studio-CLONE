/* ===( CODE AASHU )=== */
function elemHoverAnim() {
  const hoverDiv = document.querySelector(".hover-image-div");
  const hoverVideo = document.querySelector(".hover-video-div");
  const hover = document.querySelector(".hover-div");
  const elems = document.querySelectorAll(".elem1");

  hoverDiv.addEventListener("mouseenter", function () {
    hoverDiv.style.display = "block";
  });

  hoverDiv.addEventListener("mouseleave", function () {
    hoverDiv.style.display = "none";
  });
  hoverVideo.addEventListener("mouseenter", function () {
    hoverVideo.style.display = "block";
  });

  hoverVideo.addEventListener("mouseleave", function () {
    hoverVideo.style.display = "none";
  });
  hover.addEventListener("mouseenter", function () {
    hover.style.display = "block";
  });

  hover.addEventListener("mouseleave", function () {
    hover.style.display = "none";
  });

  elems.forEach((elem) => {
    elem.addEventListener("mouseenter", function () {
      event.stopPropagation();
      const imageData = elem.getAttribute("hover-image");
      const videoData = elem.getAttribute("hover-video");
      if (imageData) {
        hover.style.display = "block";
        hoverVideo.style.display = "none";
        hoverDiv.style.display = "block";
        hoverDiv.style.backgroundImage = `url(${imageData})`;
      } else if (videoData) {
        hover.style.display = "block";
        hoverDiv.style.display = "none";
        hoverVideo.style.display = "block";
        hoverVideo.src = videoData;
      }
    });
    elem.addEventListener("mouseleave", function () {
      hover.style.display = "none";
      hoverVideo.style.display = "none";
      hoverDiv.style.display = "none";
    });
  });
}
elemHoverAnim();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  freeMode: true,
});

function sliderHover() {
  const mover = document.querySelector(".mover");
  const mySwiper = document.querySelector(".mySwiper");

  mySwiper.addEventListener("mousemove", (e) => {
    gsap.to(mover, {
      x: e.x + "px",
      y: e.y + "px",
      opacity: 1,
      scale: 1,
    });
  });
  mySwiper.addEventListener("mouseenter", (e) => {
    gsap.to(mover, {
      opacity: 1,
      scale: 1,
    });
  });
  mySwiper.addEventListener("mouseleave", (e) => {
    gsap.to(mover, {
      opacity: 0,
      scale: 0,
    });
  });
}
sliderHover();


function smoothScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
smoothScroll();

function loader(){
  var tl = gsap.timeline();
  tl.from(".loader #one", {
    opacity: 1,
  });
  tl.to(".loader #one", {
    opacity: 0,
  });
  tl.from(".loader #two", {
    opacity: 0,
  });
  tl.to(".loader #two", {
    opacity: 1,
  });
  tl.to(".loader #two", {
    opacity: 0,
  });
  tl.from(".loader #three", {
    opacity: 0,
  });
  tl.to(".loader #three", {
    opacity: 1,
  });
  tl.to(".loader #three", {
    opacity: 0,
  });
  tl.to(".loader", {
    y: -100 + "%",
  });
}
loader();

function smallAnimations(){
  gsap.from(".page3 .elems .elem1 .elem1-1", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-1",
      scroller: ".main",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      // markers: true,
      scrub: true,
    },
  });
  gsap.from(".page3 .elems .elem1 .elem1-2", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-2",
      scroller: ".main",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      // markers: true,
      scrub: true,
    },
  });
  gsap.from(".page3 .elems .elem1 .elem1-3", {
    y: 150 + "%",
    scrollTrigger: {
      trigger: ".page3 .elems .elem1 .elem1-3",
      scroller: ".main",
      y: 0,
      duration: 1,
      start: "top 90%",
      end: "top 65%",
      stagger: 1,
      // markers: true,
      scrub: true,
    },
  });
  gsap.from(".page4 .swiper .swiper-wrapper", {
    y: 100 + "%",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4  .swiper .swiper-wrapper",
      scroller: ".main",
      y: 0,
      duration: 1.2,
      start: "top 120%",
      end: "top 100%",
      scrub: true,
    },
  });
}
smallAnimations();