var tl = gsap.timeline();
var gb1 = document.querySelector(".go-back1");
var gb2 = document.querySelector(".go-back2");
var gb3 = document.querySelector(".go-back3");

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
    ".page1-left h1 , .page1-left p , .menu , .page1-left .buttons",
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
  // tl.from(".buttons", {
  //   opacity: 0,
  //   duration:-1
    
  // });

  gsap.to(".page1-right img", {
    y: 15,
    repeat: -1,
    yoyo: true,
    duration: 0.9,
    ease: "rough",
  });

  gsap.to(".about-me-image img",{
    y: 15,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "rough",
  })
 
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


gb1.addEventListener("click", () => {
  burgerMenu.reverse();
});
gb2.addEventListener("click", () => {
  burgerMenu.reverse();
});
gb3.addEventListener("click", () => {
  burgerMenu.reverse();
});