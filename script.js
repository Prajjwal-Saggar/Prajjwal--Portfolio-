var tl = gsap.timeline();

var burgerMenu = gsap.timeline();
var menuHam = document.querySelector(".menu i");
var close = document.querySelector(".hamburger i");
function landingPageAnimation() {
  tl.from("#logo", {
    y: -20,
    duration: 0.7,
    delay: 0.2,
    opacity: 0,
  });

  tl.from(".nav-part2 h1", {
    y: -20,
    opacity: 0,
    stagger: {
      amount: 0.3,
    },
  });

  tl.from(
    ".page1-left h1 , p ,.menu",
    {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 1,
    },
    "same"
  );

  tl.from(
    ".page1-right img",
    {
      opacity: 0,
      duration: 0.8,
    },
    "same"
  );

  gsap.to(".page1-right img", {
    y: 15,
    repeat: -1,
    yoyo: true,
    duration: 0.9,
    ease: "rough",
  });

  tl.from(".buttons", {
    opacity: 0,
    duration: 0.5,
  });
}
function burgerMenuAnimation() {
  burgerMenu.from(".hamburger", {
    x: 300,
    duration: 0.7,
    opacity: 0,
    display: "none",
  });

  burgerMenu.from(".hamburger a", {
    x: -13,
    opacity: 0,
    stagger: {
      amount: 0.25,
    },
  });

  burgerMenu.pause();
}

landingPageAnimation();

burgerMenuAnimation();

menuHam.addEventListener("click", () => {
  burgerMenu.play();
});

close.addEventListener("click", () => {
  burgerMenu.reverse();
});
