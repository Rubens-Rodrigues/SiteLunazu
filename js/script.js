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
  const menu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".navList");

  document.addEventListener("click", function (event) {
    if (event.target.matches(".mobile-menu")) {
      menu.classList.add("active");
      navList.classList.add("active");
    } else if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      navList.classList.remove("active");
    }
  });
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

// Muda color do menu fixo letras e logo
addEventListener("load", function () {
  addEventListener("scroll", function () {
    var specialSections = document.querySelectorAll('[data="special"]');
    var maxHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    window.addEventListener("scroll", function () {
      var isSpecialVisible = false;
      for (var i = 0; i < specialSections.length; i++) {
        if (
          specialSections[i].getBoundingClientRect().top < window.innerHeight &&
          specialSections[i].getBoundingClientRect().bottom > 0
        ) {
          isSpecialVisible = true;
          break;
        }
      }
      if (isSpecialVisible) {
        document.querySelector("#logo img").src =
          "/assets/img/logo_Prancheta_1.png";
        document.getElementById("menu-one").style.color = "#000";
        document.getElementById("menu-two").style.color = "#000";
        document.getElementById("menu-three").style.color = "#000";
        document.getElementById("menu-four").style.color = "#000";
        document.getElementById("menu-five").style.color = "#000";
        document.getElementById("line1").style.backgroundColor = "#000";
        document.getElementById("line2").style.backgroundColor = "#000";
        document.getElementById("line3").style.backgroundColor = "#000";
        document.getElementById("line").style.backgroundColor = "#000";
        document.getElementById("2line").style.backgroundColor = "#000";
        document.getElementById("3line").style.backgroundColor = "#000";
        document.getElementById("4line").style.backgroundColor = "#000";
        document.getElementById("5line").style.backgroundColor = "#000";
        document.getElementById("lang1").style.color = "#000";
        document.getElementById("lang2").style.color = "#000";
        document.getElementById("lang3").style.color = "#000";
        document.getElementById("menu-right").style.color = "#000";
      } else {
        document.querySelector("#logo img").src = "/assets/img/logo-branca.png";
        document.getElementById("menu-one").style.color = "#fff";
        document.getElementById("menu-two").style.color = "#fff";
        document.getElementById("menu-three").style.color = "#fff";
        document.getElementById("menu-four").style.color = "#fff";
        document.getElementById("menu-five").style.color = "#fff";
        document.getElementById("line1").style.backgroundColor = "#fff";
        document.getElementById("line2").style.backgroundColor = "#fff";
        document.getElementById("line3").style.backgroundColor = "#fff";
        document.getElementById("line").style.backgroundColor = "#fff";
        document.getElementById("2line").style.backgroundColor = "#fff";
        document.getElementById("3line").style.backgroundColor = "#fff";
        document.getElementById("4line").style.backgroundColor = "#fff";
        document.getElementById("5line").style.backgroundColor = "#fff";
        document.getElementById("lang1").style.color = "#fff";
        document.getElementById("lang2").style.color = "#fff";
        document.getElementById("lang3").style.color = "#fff";
        document.getElementById("menu-right").style.color = "#fff";
      }
    });
  });
});

// Função para mostrar planos

function mostraBasic() {
  var divBasic = document.getElementById("basic");
  divBasic.style.display = "block";
}
function ocultaBasic() {
  divBasic = document.getElementById("basic");
  divBasic.style.display = "none";
}

function mostraConfort() {
  var divConfort = document.getElementById("confort");
  divConfort.style.display = "block";
}
function ocultaConfort() {
  divConfort = document.getElementById("confort");
  divConfort.style.display = "none";
}

function mostraExclusive() {
  var divExclusive = document.getElementById("exclusive");
  divExclusive.style.display = "block";
}
function ocultaExclusive() {
  divExclusive = document.getElementById("exclusive");
  divExclusive.style.display = "none";
}

// Validação formulário

// var form = document.forms["contact-form"];
// var btnSubmit = document.getElementById("enviar");
// var nome = document.getElementById("nome");
// var email = document.getElementById("email");
// var telefone = document.getElementById("telefone");
// var mensagem = document.getElementById("mensagem");

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// function validatePhone(phone) {
//   var re = /^\d{11}$/;
//   return re.test(phone);
// }

// btnSubmit.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (!nome.value) {
//     alert("Por favor, preencha o campo nome.");
//     nome.focus();
//     return false;
//   }

//   if (!validateEmail(email.value)) {
//     alert(
//       "Por favor, preencha um endereço de e-mail válido. Ex: seuemail@gmail.com"
//     );
//     email.focus();
//     return false;
//   }

//   if (!validatePhone(telefone.value)) {
//     alert("Por favor, preencha um número de telefone válido. Ex: 11988180002");
//     telefone.focus();
//     return false;
//   }

//   if (!mensagem.value) {
//     alert("Por favor, deixe sua mensagem.");
//     mensagem.focus();
//     return false;
//   }

//   form.submit();
// });
