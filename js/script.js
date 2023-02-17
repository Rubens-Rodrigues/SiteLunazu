// Nav bar
function initNavBar() {
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navList",
    ".navList li"
  );
  mobileNavbar.init();
  
  // faz o menu hamburger sumir ao clicar fora
  const menu = document.querySelector('.mobile-menu')
  const navList = document.querySelector('.navList')

  document.addEventListener('click', function (event) {
    if (event.target.matches('.mobile-menu')) {
      menu.classList.add('active');
      navList.classList.add('active');
    } else if (menu.classList.contains('active')) {
      menu.classList.remove('active')
      navList.classList.remove('active')
    }
  })
  
}
initNavBar();

// scroll

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const alturaTela = window.innerHeight * 1;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - alturaTela < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimacaoScroll();

// Slider

let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;

let sliderWidth = document.querySelector(".slider").clientWidth;

document.querySelector(".slider--width").style.width = `${
  sliderWidth * totalSlides
}px`;

document.querySelector(".controls").style.width = `${sliderWidth}px`;
document.querySelector(".controls").style.height = `${
  document.querySelector(".slider").clientHeight
}px`;

function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 4000);

// Muda color do menu fixo

var doc, bod, htm;
addEventListener("load", function () {
  doc = document;
  bod = doc.menucolor;
  htm = doc.documentElement;
  addEventListener("scroll", function () {
    document.getElementById("menu-one").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("menu-two").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("menu-three").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("menu-four").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("menu-five").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("logo").style.color =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("line1").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("line2").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("line3").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("line").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("2line").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("3line").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("4line").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
    document.getElementById("5line").style.backgroundColor =
      htm.scrollTop > 900 ? "#42567a" : "#fff";
  });
});


