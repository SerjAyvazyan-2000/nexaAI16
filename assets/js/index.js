


$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);

  let firstLink = $("#accordion .link").first();
  let firstSub = firstLink.next(".submenu");

  firstLink.addClass("open");
  firstSub.show();
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuBg = document.querySelector(".menu-bg");
if (burger && menu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    menuBg.classList.toggle("active");
    document.body.style.overflow = "hidden";
    if(!burger.classList.contains('active')){
         document.body.style.overflow = "unset";
    }
  });

  menuBg.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    menuBg.classList.remove("active");
    document.body.style.overflow = "unset";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      menuBg.classList.remove("active");
     document.body.style.overflow = "unset";

    });
  });

  document.addEventListener("click", (e) => {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickBurger) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      menuBg.classList.remove("active");
          document.body.style.overflow = "unset";

    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});

document.querySelectorAll('.menu-list-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const extraOffset = 20; 

            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                (headerHeight + extraOffset);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



  