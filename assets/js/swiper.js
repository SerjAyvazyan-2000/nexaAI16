let reviewsSwiper = null;
let scrolling = true;
let lastMode = null;

function initReviewsSwiper() {
  const isDesktop = window.innerWidth >= 992;
  const mode = isDesktop ? "desktop" : "mobile";

  if (reviewsSwiper && lastMode === mode) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }

  lastMode = mode;

  reviewsSwiper = new Swiper(".l-reviews-swiper", {
    direction: isDesktop ? "vertical" : "horizontal",
    slidesPerView: isDesktop ? 3 : 1,
    spaceBetween: 10,
    freeMode: {
      enabled: isDesktop,
      momentum: false,
    },
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },
    loop: true,
    allowTouchMove: !isDesktop,

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.7 },
    },
  });

  if (isDesktop) startInfiniteScroll();
}

function startInfiniteScroll() {
  function animate() {
    if (!scrolling) return requestAnimationFrame(animate);

    const speed = 0.35;

    reviewsSwiper.translate -= speed;

    const maxTranslate = reviewsSwiper.wrapperEl.scrollHeight / 2;

    if (Math.abs(reviewsSwiper.translate) >= maxTranslate) {
      reviewsSwiper.translate = 0;
    }

    reviewsSwiper.wrapperEl.style.transform = `translate3d(0, ${reviewsSwiper.translate}px, 0)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  const wrapper = document.querySelector(".l-reviews-swiper");

  wrapper.addEventListener("mouseenter", () => {
    scrolling = false;
  });

  wrapper.addEventListener("mouseleave", () => {
    scrolling = true;
  });
}

window.addEventListener("load", initReviewsSwiper);

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initReviewsSwiper, 200);
});

const advantagesSwiper = new Swiper(".p-advantages-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  autoHeight:true,

  pagination: {
    el: ".p-advantages-pagination",
    clickable: true,
  },
  loop: true,

     breakpoints: {
      320: { slidesPerView: 1 },
       450: { slidesPerView: 1.2 },

      576: { slidesPerView: 1.2 },

    },
});
