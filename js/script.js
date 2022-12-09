// Nav bar
class MobileNavbar {
  constructor(navBar, navList, navLinks) {
    this.navBar = document.querySelector(navBar);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelector(navLinks);
    this.actveClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.actveClass);
    this.navBar.classList.toggle(this.actveClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.navBar.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.navBar) {
      this.addClickEvent();
    }
    return this;
  }  
}

const mobileNavbar = new MobileNavbar(
  ".navBar",
  ".navList",
  ".navList li",
);
mobileNavbar.init()

// Scroll
const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.9;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
})

// Slider

let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

let sliderWidth = document.querySelector(".slider").clientWidth;

document.querySelector(".slider--width").style.width = `${sliderWidth * totalSlides}px`;

document.querySelector(".controls").style.width = `${sliderWidth}px`;
document.querySelector(".controls").style.height = `${document.querySelector(".slider").clientHeight}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin()
}
function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin()
}

function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000)


